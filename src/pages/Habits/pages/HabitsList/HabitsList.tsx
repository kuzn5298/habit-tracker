import { CirclePlus, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { AppRouteEnum } from '@/constants';

import { DatePickerSection, HabitsSection, Header } from './components';
import { HabitsProvider } from './contexts';
import { useHabits } from './hooks';
import { Action } from './types';

const HabitsList: React.FC = () => {
    const navigate = useNavigate();
    const { habits, date, setDate } = useHabits();

    const actions: Action[] = [
        {
            id: 'add-habit',
            icon: <CirclePlus />,
            onClick: () => navigate(AppRouteEnum.ADD_HABIT),
        },
        {
            id: 'settings',
            icon: <SettingsIcon />,
            onClick: () => navigate(AppRouteEnum.SETTINGS),
        },
    ];

    return (
        <PageContainer>
            <Header actions={actions} />
            <DatePickerSection date={date} onChange={setDate} />
            <HabitsSection habits={habits} />
        </PageContainer>
    );
};

const HabitsListWithContext: React.FC = (props) => (
    <HabitsProvider>
        <HabitsList {...props} />
    </HabitsProvider>
);

export default HabitsListWithContext;
