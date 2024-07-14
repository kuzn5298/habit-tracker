import { CirclePlus, SettingsIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { AppRouteEnum } from '@/constants';

import { DatePickerSection, HabitsSection, Header } from './components';
import { HabitsProvider } from './contexts';
import { useHabits } from './hooks';
import { Action } from './types';

const Habits: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['habits', 'settings']);
    const { habits, date, setDate, onComplete, isLoading } = useHabits();

    const actions: Action[] = [
        {
            id: 'add-habit',
            icon: <CirclePlus />,
            onClick: () => navigate(AppRouteEnum.ADD_HABIT),
            tooltip: t('habits:ADD_HABIT'),
        },
        {
            id: 'settings',
            icon: <SettingsIcon />,
            onClick: () => navigate(AppRouteEnum.SETTINGS),
            tooltip: t('settings:SETTINGS_TEXT'),
        },
    ];

    return (
        <PageContainer>
            <Header actions={actions} date={date} />
            <DatePickerSection date={date} onChange={setDate} />
            <HabitsSection
                habits={habits}
                onComplete={onComplete}
                isLoading={isLoading}
            />
        </PageContainer>
    );
};

const HabitsListWithContext: React.FC = (props) => (
    <HabitsProvider>
        <Habits {...props} />
    </HabitsProvider>
);

export default HabitsListWithContext;
