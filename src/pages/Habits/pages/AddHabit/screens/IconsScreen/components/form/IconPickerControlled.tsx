import { HTMLAttributes } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { Button, FormField } from '@/components/ui';
import { ICONS_MAP } from '@/constants';
import { cn } from '@/utils';

interface IconPickerControlProps<T extends FieldValues>
    extends HTMLAttributes<HTMLDivElement> {
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

export const IconPickerControlled = <T extends FieldValues>({
    name,
    control,
    className,
    onBack,
    ...props
}: IconPickerControlProps<T>) => {
    return (
        <FormField
            render={({ field: { value, onChange } }) => {
                const handleChange = (v?: string) => {
                    onChange?.(v);
                    onBack?.();
                };

                return (
                    <div
                        className={cn(
                            'flex gap-2 flex-wrap justify-center',
                            className
                        )}
                        {...props}
                    >
                        <Button
                            variant={
                                value === undefined ? 'default' : 'outline'
                            }
                            size="icon"
                            onClick={() => handleChange(undefined)}
                        >
                            ?
                        </Button>
                        {Object.entries(ICONS_MAP).map(([key, Icon]) => (
                            <Button
                                key={key}
                                size="icon"
                                variant={value === key ? 'default' : 'outline'}
                                onClick={() => handleChange(key)}
                            >
                                <Icon />
                            </Button>
                        ))}
                    </div>
                );
            }}
            control={control}
            name={name}
        />
    );
};
