import { useMemo } from 'react';
import { CirclePlus, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { AppRouteEnum } from '@/constants';

import { DatePickerSection, HabitsSection, Header } from './components';
import { Action, Habit } from './types';

const habits: Habit[] = [
    {
        id: '1',
        name: 'Walking',
        description: '10000 steps every day',
        color: 'green',
        icon: 'steps',
        completed: false,
    },
    {
        id: '2',
        name: 'Learn English',
        description: '10 words every day',
        icon: 'book-a',
        completed: true,
    },
    {
        id: '3',
        name: 'Give up smoking',
        description: "don't smoke every day",
        icon: 'cigarette',
        color: 'red',
        completed: true,
    },
    {
        id: '4',
        name: 'Drink water',
        description: '10 glasses every day',
        icon: 'glass-water',
        completed: false,
    },
    {
        id: '5',
        name: 'Morning shower',
        icon: 'droplet',
        completed: true,
    },
];

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
            <HabitsSection habits={habits} />
        </PageContainer>
    );
};

export default HabitsList;
