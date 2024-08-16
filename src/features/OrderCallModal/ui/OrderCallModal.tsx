import { FC, FormEvent, useRef, useState } from 'react';
import cls from './OrderCallModal.module.scss';
import { FormGroup } from 'shared/ui/FormGroup';
import { Input, InputWithMask } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select';
import { countries } from '../constants/countries';
import { Button } from 'shared/ui/Button';
import emailjs from '@emailjs/browser';
import { NotificationModal } from 'shared/ui/NotificationModal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormState {
    userName: string;
    userPhone: string;
    userCountry: string;
}

const OrderCallModal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState<FormState>({
        userName: '',
        userPhone: '',
        userCountry: ''
    });
    const [modalType, setModalType] = useState<'success' | 'error' | null>(null);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const emailJsForm = useRef<HTMLFormElement | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        if (emailJsForm.current) {
            emailjs
            .sendForm('service_wrn95cv', 'template_bjoymtu', emailJsForm.current, {
                publicKey: 'fl4WEz4zvW31gT5bt',
            })
            .then(
                () => {
                    onClose();
                    setFormState({ userName: '', userPhone: '', userCountry: '' });
                    setModalType('success');
                    setIsNotificationModalOpen(true);
                    setIsLoading(false);
                },
                () => {
                    
                    onClose();
                    setFormState({ userName: '', userPhone: '', userCountry: '' });
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
                    <form className={cls.form} ref={emailJsForm} onSubmit={sendEmail}>
                        <FormGroup label="Введите Ваше имя *" id="userName">
                            <Input 
                                type="text" 
                                id="userName" 
                                name="userName"
                                placeholder="Введите Ваше имя" 
                                required 
                                value={formState.userName}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup label="Страна *" id="userCountry">
                            <Select
                                id="userCountry"
                                name="userCountry"
                                options={countries}
                                value={formState.userCountry}
                                onChange={handleInputChange}
                                placeholder="Выберите страну"
                                required
                            />
                        </FormGroup>
                        <FormGroup label="Введите Ваш телефон *" id="userPhone">
                            <InputWithMask
                                id="userPhone"
                                name="userPhone"
                                value={formState.userPhone}
                                onChange={handleInputChange}
                                placeholder="+7 (___) ___-__-__"
                                required
                            />
                        </FormGroup>
                        <Button 
                            value={'Отправить'} 
                            type='submit'
                            isLoading={isLoading}
                        />
                    </form>
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

export default OrderCallModal;
