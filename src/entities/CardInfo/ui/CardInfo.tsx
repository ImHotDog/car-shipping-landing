import { FC, ReactNode } from 'react';
import cls from './CardInfo.module.scss';

interface CardInfoProps {
    title: string;
    description: string;
    icon?: ReactNode;
    titleColor?: boolean;
}

const CardInfo: FC<CardInfoProps> = ({ title, description, icon, titleColor }) => {
    return (
        <div className={cls.CardInfo}>
            <div className={cls.Content}>
                {icon &&
                    <div className={cls.Icon}>
                        {icon}
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