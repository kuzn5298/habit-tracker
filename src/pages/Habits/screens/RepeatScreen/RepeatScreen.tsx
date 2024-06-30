import { Control, FieldValues, Path } from 'react-hook-form';

import { PageDialog } from '@/components/custom';

import {
    RepeatScreenBody,
    RepeatScreenFooter,
    RepeatScreenHeader,
} from './components';

interface RepeatScreenProps<T extends FieldValues> {
    title?: string;
    typeName: Path<T>;
    listName: Path<T>;
    control: Control<T>;
    onBack?: () => void;
}

const RepeatScreen = <T extends FieldValues>({
    title,
    typeName,
    listName,
    control,
    onBack,
}: RepeatScreenProps<T>) => {
    return (
        <PageDialog
            header={<RepeatScreenHeader title={title} />}
            body={
                <RepeatScreenBody
                    typeName={typeName}
                    listName={listName}
                    control={control}
                />
            }
            footer={<RepeatScreenFooter onBack={onBack} />}
        />
    );
};

export default RepeatScreen;
