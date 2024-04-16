import { Control, FieldValues, Path } from 'react-hook-form';

import { Calendar, FormField } from '@/components/ui';
import { getDateFormat } from '@/libs/date';

interface CalendarControlledProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

export const CalendarControlled = <T extends FieldValues>({
    name,
    control,
    onBack,
}: CalendarControlledProps<T>) => {
    return (
        <FormField
            render={({ field: { value, onChange } }) => {
                const handleChange = (e?: Date) => {
                    onChange?.(e && getDateFormat(e));
                    onBack?.();
                };
                return (
                    <Calendar
                        mode="single"
                        selected={new Date(value)}
                        onSelect={handleChange}
                        defaultMonth={value}
                        fixedWeeks
                    />
                );
            }}
            control={control}
            name={name}
        />
    );
};
