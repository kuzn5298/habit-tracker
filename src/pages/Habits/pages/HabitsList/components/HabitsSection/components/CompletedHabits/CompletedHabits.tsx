import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui';
import { Habit } from '@/types';
import { getEditHabit } from '@/utils';

import { HabitCard } from '../../../HabitCard';

interface CompletedHabitsProps {
    habits?: Habit[];
}

export const CompletedHabits: React.FC<CompletedHabitsProps> = ({
    habits = [],
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const completedHabits = useMemo(() => habits.filter(() => false), [habits]);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center gap-2 py-2">
                <h4 className="text-base font-semibold">
                    Completed {completedHabits.length} habits
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        {React.createElement(isOpen ? ChevronUp : ChevronDown, {
                            className: 'size-4',
                        })}
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="space-y-2">
                {completedHabits.map(
                    ({ id, name, description, icon, color }) => (
                        <HabitCard
                            key={id}
                            name={name}
                            description={description}
                            icon={icon}
                            color={color}
                            completed
                            onClick={() => navigate(getEditHabit(id))}
                        />
                    )
                )}
            </CollapsibleContent>
        </Collapsible>
    );
};
