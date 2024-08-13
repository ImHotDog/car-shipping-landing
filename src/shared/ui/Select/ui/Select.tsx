import { FC } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    id: string;
    name: string;
    options: Option[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    required?: boolean;
}

const Select: FC<SelectProps> = ({ id, name, options, value, onChange, placeholder, required }) => (
    <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
    >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

export default Select;
