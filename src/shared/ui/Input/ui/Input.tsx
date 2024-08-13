import { FC } from 'react';

interface InputProps {
    id: string;
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ id, name, type, value, placeholder, required, onChange }) => (
    <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
    />
);

export default Input;
