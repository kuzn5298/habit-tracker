import { Control, FieldValues, Path } from 'react-hook-form';

import { FormField, Textarea } from '@/components/ui';
import { cn } from '@/utils';

interface TextareaControlledProps<T extends FieldValues>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: Path<T>;
    control: Control<T>;
}

export const TextareaControlled = <T extends FieldValues>({
    name,
    control,
    className,
    ...props
}: TextareaControlledProps<T>) => {
    return (
        <FormField
            render={({ field }) => (
                <Textarea
                    {...props}
                    className={cn('resize-none', className)}
                    {...field}
                />
            )}
            control={control}
            name={name}
        />
    );
};
