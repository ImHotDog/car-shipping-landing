import { CallbackForm } from 'entities/CallbackForm';
import cls from './CalculatorSection.module.scss';
import { fields } from '../constants/fields';
import { FormEvent, useRef, useState } from 'react';
import { NotificationModal } from 'shared/ui/NotificationModal';
import emailjs from '@emailjs/browser';

const CalculatorSection = () => {

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
            emailjs.sendForm('service_wrn95cv', 'template_w81icue', emailJsForm.current, {
                publicKey: 'fl4WEz4zvW31gT5bt',
            })
            .then(
                () => {
                    resetFormState();
                    setModalType('success');
                    setIsNotificationModalOpen(true);
                    setIsLoading(false);
                },
                () => {
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
            <div className={cls.CalculatorSection}>

                <div className={cls.Content}>

                    <div  className={cls.Title}>
                        <h1>
                            Рассчитайте стоимость авто из США
                            <span> прямо сейчас!</span>
                        </h1>

                        <p className={cls.Description}>
                            Заполните форму и мы подберем минимум 10 вариантов реальных авто из США по актуальной цене.
                        </p>
                    </div>
                    
                    <div className={cls.PanelForm}>
                        <div className={cls.LeftPanel} />

                        <div className={cls.RightPanel}>
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

                    
                </div>

                
                
            </div>
            <NotificationModal
                onClose={handleCloseNotificationModal}
                type={modalType ?? 'success'}
                isOpen={isNotificationModalOpen}
            />
        </>
    );
}

export default CalculatorSection;