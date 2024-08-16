import { Button } from 'shared/ui/Button';
import cls from './HeroSection.module.scss';
import WhatsappIcon from 'shared/assets/icons/whatsapp.svg?react';
import TelegramIcon from 'shared/assets/icons/telegram.svg?react';
import InstagramIcon from 'shared/assets/icons/instagram.svg?react';



const HeroSection = () => {
    return (
        <div className={cls.MainSection}>
            <div className={cls.Content}>

                <h1 className={cls.Title}>
                    Новые и автомобили с пробегом из США от 2019 года 
                    <span> с выгодой до 60%</span>
                </h1>
                
                <ul className={cls.FeaturesList}>
                    <li>- Вы получите эПТС и тех. паспорт на авто</li>
                    <li>- Рассрочка на услуги Босс Авто</li>
                    <li>- Депозитный договор и инвойс на Ваше имя.</li>
                </ul>

                <Button value='Подобрать авто' className={cls.Button} />

                <div className={cls.Icons}>
                    <WhatsappIcon/>
                    <TelegramIcon />
                    <InstagramIcon />
                </div>

                <div className={cls.Contact}>
                    <span>Номер горячей линии: </span>
                    <a href="tel:+74951326224">+7 (999) 999 99 99</a>
                </div>

                <div className={cls.Email}>
                    <a href="mailto:test@yandex.ru">test@yandex.ru</a>
                </div>

            </div>
            
        </div>
    );
}

export default HeroSection;