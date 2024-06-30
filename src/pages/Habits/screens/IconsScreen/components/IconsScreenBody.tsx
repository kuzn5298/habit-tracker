import { Control, FieldValues, Path } from 'react-hook-form';

import { PageDialogBody } from '@/components/custom';

import { IconPickerControlled } from './form';

interface IconsScreenBodyProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

export const IconsScreenBody = <T extends FieldValues>({
    name,
    control,
    onBack,
}: IconsScreenBodyProps<T>) => {
    return (
        <PageDialogBody>
            <IconPickerControlled
                control={control}
                name={name}
                onBack={onBack}
            />
        </PageDialogBody>
    );
};
