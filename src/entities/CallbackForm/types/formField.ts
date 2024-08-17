export interface FormField {
    id: string;
    label: string;
    type: 'text' | 'select' | 'phone';
    placeholder?: string;
    options?: {value: string, label: string}[];
    required?: boolean;
}