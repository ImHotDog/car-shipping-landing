import { FC } from "react";
import cls from './Button.module.scss';
import loader from 'shared/assets/loader/button-loader.gif';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    isLoading?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = ({ value, isLoading, className, ...props}) => {
    return (
        <button className={`${cls.orderCallButton} ${isLoading ? cls.isLoading : ''} ${className}`} {...props}>
            {isLoading ? (
                <div className={cls.loaderWrapper}>
                    <img className={cls.loader} src={loader} alt="loader" />
                </div>
            ) : value}
        </button>
    );
}

export default Button;