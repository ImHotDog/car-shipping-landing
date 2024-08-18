import { FC } from 'react';

interface TextareaProps {
    id: string;
    name: string;
    rows: number;
    value?: string;
    placeholder?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement >) => void;
}

const Textarea: FC<TextareaProps> = ({ id, name, rows, value, placeholder, required, onChange }) => (
    <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        rows={rows}
    />
);

export default Textarea;
