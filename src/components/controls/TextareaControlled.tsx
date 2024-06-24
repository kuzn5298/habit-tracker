import { Control, FieldValues, Path } from 'react-hook-form';

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Textarea,
} from '@/components/ui';
import { cn } from '@/utils';

interface TextareaControlledProps<T extends FieldValues>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    withoutMessage?: boolean;
}

export const TextareaControlled = <T extends FieldValues>({
    name,
    control,
    className,
    label,
    withoutMessage,
    ...props
}: TextareaControlledProps<T>) => (
    <FormField
        render={({ field, fieldState }) => (
            <FormItem className={className}>
                {label && <FormLabel>{label}</FormLabel>}
                <FormControl>
                    <Textarea
                        className={cn(
                            'resize-none',
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
