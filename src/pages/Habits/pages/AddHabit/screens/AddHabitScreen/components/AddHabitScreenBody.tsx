import { PageDialogBody } from '@/components/custom';
import { HabitForm } from '@/pages/Habits/forms';

import { useAddHabit } from '../../../hooks';

export const AddHabitScreenBody: React.FC = () => {
    const { form, setScreen } = useAddHabit();

    return (
        <PageDialogBody>
            <HabitForm form={form} setScreen={setScreen} />
        </PageDialogBody>
    );
};
