import { CardInfo } from 'entities/CardInfo';
import cls from './FeatureAboutSection.module.scss';
import { cardSource } from '../constants/cardSource';
import PriceIcon from 'shared/assets/icons/price.svg?react';
import TrophyIcon from 'shared/assets/icons/trophy.svg?react';
import StoIcon from 'shared/assets/icons/sto.svg?react';
import LogisticIcon from 'shared/assets/icons/logistic.svg?react';

const iconSource = [
    PriceIcon,
    TrophyIcon,
    StoIcon,
    LogisticIcon
]

const FeatureAboutSection = () => {
    return (
        <div className={cls.FeatureAboutSection}>
            <div className={cls.Content}>
                <h1 className={cls.Title}>
                    <span>Почему </span>
                    именно мы?
                </h1>
                <div className={cls.Cards}>
                    {cardSource.map((card, index) => {
                        const iconComponent = iconSource[index];

                        return (
                            <CardInfo 
                                title={card.title}
                                description={card.description}
                                icon={iconComponent}
                                key={index}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default FeatureAboutSection;