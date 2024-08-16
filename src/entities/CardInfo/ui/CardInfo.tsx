import { ComponentType, FC } from 'react';
import cls from './CardInfo.module.scss';

interface CardInfoProps {
    title: string;
    description: string;
    icon?: ComponentType;
    titleColor?: boolean;
}

const CardInfo: FC<CardInfoProps> = ({ title, description, icon: Icon, titleColor }) => {
    return (
        <div className={cls.CardInfo}>
            <div className={cls.Content}>
                {Icon &&
                    <div className={cls.Icon}>
                        <Icon />
                    </div>
                }
                <h3 className={titleColor ? cls.TitleColor : ''}>
                    {title}
                </h3>
                <p className={cls.Description}>
                    {description}
                </p>
            </div>

        </div>
    );
};

export default CardInfo;