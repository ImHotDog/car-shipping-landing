import { FormField } from "entities/CallbackForm/types/formField";
import { countries } from "./countries";

export const fields: FormField[] = [
    {
        id: 'userName',
        label: 'Введите Ваше имя *',
        type: 'text',
        placeholder: 'Введите Ваше имя',
        required: true,
    },
    {
        id: 'userCountry',
        label: 'Страна *',
        type: 'select',
        placeholder: 'Выберите страну',
        options: countries,
        required: true,
    },
    {
        id: 'userPhone',
        label: 'Введите Ваш телефон *',
        type: 'phone',
        placeholder: '+7 (___) ___-__-__',
        required: true,
    },
];