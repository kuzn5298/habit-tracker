import { Check } from 'lucide-react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { PageButton } from '@/components/custom';
import { FormField } from '@/components/ui';
import { WEEK_DAYS, WeekDayEnum } from '@/constants';
import { getDayText } from '@/libs/date';

interface WeekDayPickerControlProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
}

export const WeekDayPickerControlled = <T extends FieldValues>({
    name,
    control,
}: WeekDayPickerControlProps<T>) => {
    return (
        <FormField
            render={({ field: { value, onChange } }) => (
                <div className="flex flex-col gap-2">
                    {WEEK_DAYS.map((day) => {
                        const isSelected = value.includes(day);

                        const handleClick = () => {
                            const newValue = isSelected
                                ? value.filter(
                                      (item: WeekDayEnum) => item !== day
                                  )
                                : [...value, day].sort((a, b) => a - b);

                            onChange(newValue);
                        };

                        return (
                            <PageButton
                                size="sm"
                                key={day}
                                endIcon={
                                    isSelected ? (
                                        <Check size="1.25rem" />
                                    ) : undefined
                                }
                                onClick={handleClick}
                            >
                                {getDayText(day)}
                            </PageButton>
                        );
                    })}
                </div>
            )}
            control={control}
            name={name}
        />
    );
};
