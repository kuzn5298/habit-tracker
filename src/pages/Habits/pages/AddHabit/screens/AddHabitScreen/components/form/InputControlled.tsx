import { Control, FieldValues, Path } from 'react-hook-form';

import { FormField, Input, InputProps } from '@/components/ui';

interface InputControlProps<T extends FieldValues> extends InputProps {
    name: Path<T>;
    control: Control<T>;
}

export const InputControlled = <T extends FieldValues>({
    name,
    control,
    ...props
}: InputControlProps<T>) => {
    return (
        <FormField
            render={({ field }) => <Input {...props} {...field} />}
            control={control}
            name={name}
        />
    );
};
