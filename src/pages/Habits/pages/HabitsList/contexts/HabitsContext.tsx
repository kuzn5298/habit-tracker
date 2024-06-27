import { createContext, useCallback, useEffect, useMemo } from 'react';

import { useHabitAPI } from '@/hooks';
import { useHabitStore } from '@/store';
import { Habit } from '@/types';

export interface HabitsContextValue {
    habits: Habit[];
    isLoading: boolean;
}

export interface HabitsProviderProps {
    children: React.ReactNode;
}

export const HabitsContext = createContext<HabitsContextValue>(
    {} as HabitsContextValue
);

export const HabitsProvider: React.FC<HabitsProviderProps> = ({ children }) => {
    const { habits, loaded, setHabits } = useHabitStore();
    const { isLoading, getHabits } = useHabitAPI();

    const fetchHabits = useCallback(async () => {
        const { success, data } = await getHabits();
        if (success) {
            setHabits(data);
        }
    }, [setHabits, getHabits]);

    useEffect(() => {
        if (!loaded) {
            fetchHabits();
        }
    }, [fetchHabits, loaded]);

    const contextValue = useMemo<HabitsContextValue>(
        () => ({ habits, isLoading }),
        [habits, isLoading]
    );

    return (
        <HabitsContext.Provider value={contextValue}>
            {children}
        </HabitsContext.Provider>
    );
};
