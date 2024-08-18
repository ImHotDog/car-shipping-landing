import { FormField } from "entities/CallbackForm/types/formField";
import { countries } from "./countries";
import { years } from "./years";

export const fields: FormField[] = [
    {
        id: 'userName',
        label: 'Имя *',
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
        label: 'Номер телефона *',
        type: 'phone',
        placeholder: '+7 (___) ___-__-__',
        required: true,
    },
    {
        id: 'autoYear',
        label: 'Год авто *',
        type: 'select',
        placeholder: 'Выберите год',
        options: years,
        required: true,
    },
    {
        id: 'autoDescription',
        label: 'Какие марки авто Вас интересуют? *',
        type: 'textarea',
        required: true,
    },
];