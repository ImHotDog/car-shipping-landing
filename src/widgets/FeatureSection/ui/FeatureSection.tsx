import cls from './FeatureSection.module.scss';
import { cardSourse } from '../constants/cardSources';
import { CardInfo } from 'entities/CardInfo';

const FeatureSection = () => {
    return (
        <div className={cls.FeatureSection}>
            <div className={cls.Content}>
                <h1 className={cls.Title}>
                    <span>Преимущества </span>
                    покупки авто из США
                </h1>
                <div className={cls.Cards}>
                    {cardSourse.map((card, index) => (
                        <CardInfo 
                            title={card.title}
                            description={card.description}
                            titleColor={true}
                            key={index}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default FeatureSection;