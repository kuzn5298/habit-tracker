import { PageDialog } from '@/components/custom';

import { useEditHabit } from '../../hooks';
import {
    EditHabitScreenBody,
    EditHabitScreenFooter,
    EditHabitScreenHeader,
} from './components';

const EditHabitScreen: React.FC = () => {
    const { isLoading } = useEditHabit();

    return (
        <PageDialog
            loading={isLoading}
            header={<EditHabitScreenHeader />}
            body={<EditHabitScreenBody />}
            footer={<EditHabitScreenFooter />}
        />
    );
};

export default EditHabitScreen;
