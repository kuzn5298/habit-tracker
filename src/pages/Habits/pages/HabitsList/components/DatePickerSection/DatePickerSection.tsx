import { HTMLAttributes } from 'react';

interface DatePickerSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const DatePickerSection: React.FC<DatePickerSectionProps> = (props) => {
    return <div {...props}>Date picker Section</div>;
};
