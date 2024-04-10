import { useMemo } from 'react';

import { Habit } from '@/types';

import { HabitCard } from '../../../HabitCard';

interface ActualHabitsProps {
    habits?: Habit[];
}

export const ActualHabits: React.FC<ActualHabitsProps> = ({ habits = [] }) => {
    const actualHabits = useMemo(() => habits.filter(() => true), [habits]);

    return (
        <div>
            <h4 className="mb-3 text-base font-semibold">Actual</h4>
            <div className="flex flex-col gap-4">
                {actualHabits.map(({ id, name, description, icon, color }) => (
                    <HabitCard
                        key={id}
                        name={name}
                        description={description}
                        icon={icon}
                        color={color}
                        completed={false}
                    />
                ))}
            </div>
        </div>
    );
};
