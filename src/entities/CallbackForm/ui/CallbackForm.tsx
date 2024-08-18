import { FormEvent, forwardRef } from 'react';
import cls from './CallbackForm.module.scss';
import { FormGroup } from 'shared/ui/FormGroup';
import { Input, InputWithMask, Textarea } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select';
import { FormField } from '../types/formField';
import { Button } from 'shared/ui/Button';

interface CallbackFormProps {
    fields: FormField[];
    formState: { [key: string]: string };
    isLoading: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CallbackForm= forwardRef<HTMLFormElement, CallbackFormProps>(({ fields, formState, isLoading, onChange, onSubmit }, ref) => {

    return (
        <form className={cls.form} ref={ref} onSubmit={onSubmit}>
            {fields.map((field) => (
                <FormGroup key={field.id} label={field.label} id={field.id}>
                    {field.type === 'text' && (
                        <Input
                            type="text"
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={formState[field.id] || ''}
                            onChange={onChange}
                        />
                    )}
                    {field.type === 'select' && (
                        <Select
                            id={field.id}
                            name={field.id}
                            options={field.options || []}
                            value={formState[field.id] || ''}
                            onChange={onChange}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                    )}
                    {field.type === 'phone' && (
                        <InputWithMask
                            id={field.id}
                            name={field.id}
                            value={formState[field.id] || ''}
                            onChange={onChange}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                    )}
                    {field.type === 'textarea' && (
                        <Textarea
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={formState[field.id] || ''}
                            onChange={onChange}
                            rows={5}
                        />
                    )}
                </FormGroup>
            ))}
            <Button 
                value={'Отправить'} 
                type='submit'
                isLoading={isLoading}
            />
        </form>
    );
});

export default CallbackForm;