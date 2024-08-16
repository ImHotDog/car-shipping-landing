import { Button } from 'shared/ui/Button';
import cls from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <div className={cls.MainSection}>
            <div>
                <h1>Новые и автомобили с пробегом из США от 2019 года с выгодой до 60%</h1>
            </div>
            <div>
                <ul>
                    <li>- Вы получите эПТС и тех. паспорт на авто</li>
                    <li>- Рассрочка на услуги Босс Авто</li>
                    <li>- Депозитный договор и инвойс на Ваше имя.</li>
                </ul>
            </div>
            <div>
                <Button value='Подобрать авто'/>
            </div>
            <div>
                icons
            </div>
            <div>
                <span>Номер горячей линии: </span>
                <a href="tel:+74951326224">+7 (999) 999 99 99</a>
            </div>
            <div>
                <a href="mailto:test@yandex.ru">test@yandex.ru</a>
            </div>
        </div>
    );
}

export default HeroSection;