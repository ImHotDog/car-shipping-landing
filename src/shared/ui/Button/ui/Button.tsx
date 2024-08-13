import { FC } from "react";
import cls from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({ value, className, ...props}) => {
    return (
        <button className={`${cls.orderCallButton} ${className}`} {...props}>
            {value}
        </button>
    );
}

export default Button;