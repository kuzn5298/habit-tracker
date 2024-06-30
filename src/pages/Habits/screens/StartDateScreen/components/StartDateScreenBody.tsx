import { Control, FieldValues, Path } from 'react-hook-form';

import { PageDialogBody } from '@/components/custom';

import { CalendarControlled } from './form';

interface StartDateScreenBodyProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

export const StartDateScreenBody = <T extends FieldValues>({
    name,
    control,
    onBack,
}: StartDateScreenBodyProps<T>) => {
    return (
        <PageDialogBody>
            <div className="flex justify-center">
                <CalendarControlled
                    name={name}
                    control={control}
                    onBack={onBack}
                />
            </div>
        </PageDialogBody>
    );
};
