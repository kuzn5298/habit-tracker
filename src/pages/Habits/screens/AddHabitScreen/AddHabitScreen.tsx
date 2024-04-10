import { PageDialog } from '@/components/custom';

import {
    AddHabitScreenBody,
    AddHabitScreenFooter,
    AddHabitScreenHeader,
} from './components';

const EditHabitScreen: React.FC = () => {
    return (
        <PageDialog
            header={<AddHabitScreenHeader />}
            body={<AddHabitScreenBody />}
            footer={<AddHabitScreenFooter />}
        />
    );
};

export default EditHabitScreen;
