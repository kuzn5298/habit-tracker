import { useMemo } from 'react';
import { CirclePlus, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { AppRouteEnum } from '@/constants';

import { DatePickerSection, HabitsSection, Header } from './components';
import { Action } from './types';

const HabitsList: React.FC = () => {
    const navigate = useNavigate();

    const actions: Action[] = useMemo(
        () => [
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
        ],
        [navigate]
    );

    return (
        <PageContainer>
            <Header actions={actions} />
            <DatePickerSection className="sm:hidden" />
            <HabitsSection />
        </PageContainer>
    );
};

export default HabitsList;
