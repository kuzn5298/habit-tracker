import { Control, FieldValues, Path } from 'react-hook-form';

import { FormField, Tabs, TabsProps } from '@/components/ui';

interface TabsControlProps<T extends FieldValues> extends TabsProps {
    name: Path<T>;
    control: Control<T>;
}

export const TabsControlled = <T extends FieldValues>({
    name,
    control,
    ...props
}: TabsControlProps<T>) => {
    return (
        <FormField
            render={({ field: { value, onChange } }) => {
                return (
                    <Tabs value={value} onValueChange={onChange} {...props} />
                );
            }}
            control={control}
            name={name}
        />
    );
};
