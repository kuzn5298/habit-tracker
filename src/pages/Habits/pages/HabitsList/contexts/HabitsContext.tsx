import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { useHabitAPI } from '@/hooks';
import { formatDate } from '@/libs/date';
import { useHabitStore } from '@/store';
import { Habit } from '@/types';

import { filterHabitsByDate } from './helpers';

export interface HabitsContextValue {
    habits: Habit[];
    date: string;
    setDate: (date: string) => void;
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
    const [selectDate, setSelectDate] = useState(
        formatDate(new Date(), 'YYYY-MM-DD')
    );

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

    const dateHabits = useMemo(
        () => filterHabitsByDate(habits, selectDate),
        [habits, selectDate]
    );

    const contextValue = useMemo<HabitsContextValue>(
        () => ({
            habits: dateHabits,
            date: selectDate,
            setDate: setSelectDate,
            isLoading,
        }),
        [dateHabits, selectDate, setSelectDate, isLoading]
    );

    return (
        <HabitsContext.Provider value={contextValue}>
            {children}
        </HabitsContext.Provider>
    );
};
