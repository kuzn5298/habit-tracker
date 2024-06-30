import { Control, FieldValues, Path } from 'react-hook-form';

import { PageDialog } from '@/components/custom';

import {
    StartDateScreenBody,
    StartDateScreenFooter,
    StartDateScreenHeader,
} from './components';

interface StartDateScreenProps<T extends FieldValues> {
    title?: string;
    name: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

const StartDateScreen = <T extends FieldValues>({
    name,
    control,
    onBack,
    title,
}: StartDateScreenProps<T>) => {
    return (
        <PageDialog
            className="max-w-sm"
            header={<StartDateScreenHeader title={title} />}
            body={
                <StartDateScreenBody
                    name={name}
                    control={control}
                    onBack={onBack}
                />
            }
            footer={<StartDateScreenFooter onBack={onBack} />}
        />
    );
};

export default StartDateScreen;
