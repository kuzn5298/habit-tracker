import { Habit } from '@/types';

import { ActualHabits, CompletedHabits } from './components';

interface HabitsSectionProps {
    habits?: Habit[];
}

export const HabitsSection: React.FC<HabitsSectionProps> = ({
    habits = [],
}) => {
    return (
        <div>
            <ActualHabits habits={habits} />
            <CompletedHabits habits={habits} />
        </div>
    );
};
