import { FC } from 'react';
import MaskedInput from 'react-text-mask';

interface InputWithMaskProps {
    id: string;
    name: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithMask: FC<InputWithMaskProps> = ({ id, name, value, placeholder, required, onChange }) => (
    <MaskedInput
        mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
    />
);

export default InputWithMask;
