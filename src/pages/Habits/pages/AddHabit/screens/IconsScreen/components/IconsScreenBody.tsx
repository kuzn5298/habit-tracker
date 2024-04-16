import { PageDialogBody } from '@/components/custom';

import { AddHabitScreenEnum } from '../../../constants';
import { useAddHabit } from '../../../hooks';
import { IconPickerControlled } from './form';

export const IconsScreenBody: React.FC = () => {
    const { form, setScreen } = useAddHabit();
    return (
        <PageDialogBody>
            <IconPickerControlled
                control={form.control}
                name="icon"
                onBack={() => setScreen(AddHabitScreenEnum.AddScreen)}
            />
        </PageDialogBody>
    );
};
