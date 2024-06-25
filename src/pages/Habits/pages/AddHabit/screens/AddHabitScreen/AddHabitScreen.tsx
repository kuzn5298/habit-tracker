import { PageDialog } from '@/components/custom';

import { useAddHabit } from '../../hooks';
import {
    AddHabitScreenBody,
    AddHabitScreenFooter,
    AddHabitScreenHeader,
} from './components';

const EditHabitScreen: React.FC = () => {
    const { loading } = useAddHabit();
    return (
        <PageDialog
            loading={loading}
            header={<AddHabitScreenHeader />}
            body={<AddHabitScreenBody />}
            footer={<AddHabitScreenFooter />}
        />
    );
};

export default EditHabitScreen;
