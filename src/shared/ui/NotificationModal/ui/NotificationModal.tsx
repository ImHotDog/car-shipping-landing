import { FC } from 'react';
import cls from './NotificationModal.module.scss';
import { Button } from 'shared/ui/Button';

interface NotificationModalProps {
    isOpen: boolean,
    onClose: () => void;
    type: 'success' | 'error';
}

const NotificationModal: FC<NotificationModalProps> = ({
    isOpen,
    onClose,
    type,
}) => {

    return (
        <div className={`${cls.modalOverlay} ${isOpen ? cls.active : ''}`} onClick={onClose}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={cls.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>{type === 'success' ? 'Спасибо' : 'Ошибка'}</h2>
                <p className={cls.message}>
                    {type === 'success' ?
                        "Ваша заявка принята в обработку. Мы свяжемся с Вами в ближайшее время." :
                        "Извиняемся за принесенные неудобства. Попробуйте отправить заявку немного позднее."
                    }
                </p>
                <Button 
                    value={'Готово'} 
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default NotificationModal;