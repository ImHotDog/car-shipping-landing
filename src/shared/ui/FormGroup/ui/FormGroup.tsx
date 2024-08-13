import { FC, ReactNode } from 'react';
import cls from './FormGroup.module.scss';

interface FormGroupProps {
    label: string;
    id: string;
    children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, id, children }) => (
    <div className={cls.formGroup}>
        <label className={cls.formGroupTittle} htmlFor={id}>
            {label}
        </label>
        {children}
    </div>
);

export default FormGroup;
