import { FC, FormEvent, useRef, useState } from 'react';
import cls from './CallbackModal.module.scss';
import emailjs from '@emailjs/browser';
import { NotificationModal } from 'shared/ui/NotificationModal';
import { CallbackForm } from 'entities/CallbackForm';
import { fields } from '../constants/fields';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CallbackModal: FC<ModalProps> = ({ isOpen, onClose }) => {

    const [formState, setFormState] = useState<{ [key: string]: string }>({});

    const [modalType, setModalType] = useState<'success' | 'error' | null>(null);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const emailJsForm = useRef<HTMLFormElement | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleCloseNotificationModal = () => {
        setIsNotificationModalOpen(false);
        setModalType(null);
    };

    const resetFormState = () => {
        setFormState({});
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);


        if (emailJsForm.current) {
            emailjs.sendForm('service_wrn95cv', 'template_bjoymtu', emailJsForm.current, {
                publicKey: 'fl4WEz4zvW31gT5bt',
            })
            .then(
                () => {
                    onClose();
                    resetFormState();
                    setModalType('success');
                    setIsNotificationModalOpen(true);
                    setIsLoading(false);
                },
                () => {
                    
                    onClose();
                    resetFormState();
                    setModalType('error');
                    setIsNotificationModalOpen(true);
                    setIsLoading(false);
                },
            );
        }
    }

    return (
        <>
            <div className={`${cls.modalOverlay} ${isOpen ? cls.active : ''}`} onClick={onClose}>
                <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={cls.closeButton} onClick={onClose}>
                        &times;
                    </button>
                    <h2>Обратный звонок</h2>

                    <CallbackForm 
                        fields={fields}
                        formState={formState}
                        onChange={handleInputChange}
                        onSubmit={sendEmail}
                        isLoading={isLoading}
                        ref={emailJsForm}
                    />

                </div>
            </div>
            
            <NotificationModal
                onClose={handleCloseNotificationModal}
                type={modalType ?? 'success'}
                isOpen={isNotificationModalOpen}
            />
        </>
        
    );
};

export default CallbackModal;
