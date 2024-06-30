import { Control, FieldValues, Path } from 'react-hook-form';

import { PageDialog } from '@/components/custom';

import {
    IconsScreenBody,
    IconsScreenFooter,
    IconsScreenHeader,
} from './components';

interface IconsScreenProps<T extends FieldValues> {
    title?: string;
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

const IconsScreen = <T extends FieldValues>({
    title,
    name,
    control,
    onBack,
}: IconsScreenProps<T>) => {
    return (
        <PageDialog
            header={<IconsScreenHeader title={title} />}
            body={
                <IconsScreenBody
                    name={name}
                    control={control}
                    onBack={onBack}
                />
            }
            footer={<IconsScreenFooter onBack={onBack} />}
        />
    );
};

export default IconsScreen;
