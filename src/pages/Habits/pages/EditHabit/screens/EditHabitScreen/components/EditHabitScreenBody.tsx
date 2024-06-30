import { PageDialogBody } from '@/components/custom';

import { HabitForm } from '../../../../../forms';
import { useEditHabit } from '../../../hooks';

export const EditHabitScreenBody: React.FC = () => {
    const { form, setScreen, isLoading } = useEditHabit();

    return (
        <PageDialogBody>
            {!isLoading && <HabitForm form={form} setScreen={setScreen} />}
        </PageDialogBody>
    );
};
