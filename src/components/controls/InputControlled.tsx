import { Control, FieldValues, Path } from 'react-hook-form';

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    InputProps,
} from '@/components/ui';
import { cn } from '@/utils';

interface InputControlProps<T extends FieldValues> extends InputProps {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    withoutMessage?: boolean;
}

export const InputControlled = <T extends FieldValues>({
    name,
    control,
    className,
    label,
    withoutMessage,
    ...props
}: InputControlProps<T>) => (
    <FormField
        render={({ field, fieldState }) => (
            <FormItem className={className}>
                {label && <FormLabel>{label}</FormLabel>}
                <FormControl>
                    <Input
                        className={cn(
                            fieldState.invalid && 'border-destructive'
                        )}
                        {...props}
                        {...field}
                    />
                </FormControl>
                {!withoutMessage && <FormMessage />}
            </FormItem>
        )}
        control={control}
        name={name}
    />
);
