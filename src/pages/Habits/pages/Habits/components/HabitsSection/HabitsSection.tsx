import { useNavigate } from 'react-router-dom';

import { Habit } from '@/types';
import { getEditHabit } from '@/utils';

import { HabitCard, SkeletonHabitCard } from '../HabitCard';

interface HabitsSectionProps {
    habits?: Habit[];
    isLoading?: boolean;
    onComplete?: (habitId: string, state: boolean) => void;
}

const LOADING_ITEMS = 3;

export const HabitsSection: React.FC<HabitsSectionProps> = ({
    habits = [],
    isLoading,
    onComplete,
}) => {
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="flex flex-col gap-4">
                {new Array(LOADING_ITEMS).fill(null).map((_, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SkeletonHabitCard key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {habits.map(({ id, name, description, icon, color, completed }) => (
                <HabitCard
                    key={id}
                    name={name}
                    description={description}
                    icon={icon}
                    color={color}
                    completed={completed}
                    onClick={() => navigate(getEditHabit(id))}
                    onComplete={(state: boolean) => onComplete?.(id, state)}
                />
            ))}
        </div>
    );
};
