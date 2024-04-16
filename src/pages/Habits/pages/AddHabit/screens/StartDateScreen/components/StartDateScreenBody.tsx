import { PageDialogBody } from '@/components/custom';

import { AddHabitScreenEnum } from '../../../constants';
import { useAddHabit } from '../../../hooks';
import { CalendarControlled } from './form';

export const StartDateScreenBody: React.FC = () => {
    const { form, setScreen } = useAddHabit();
    return (
        <PageDialogBody>
            <div className="flex justify-center">
                <CalendarControlled
                    name="startDate"
                    control={form.control}
                    onBack={() => setScreen(AddHabitScreenEnum.AddScreen)}
                />
            </div>
        </PageDialogBody>
    );
};
