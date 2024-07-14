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

import {
    combineHabitsComplete,
    filterHabitsByDate,
    getMonthDate,
    sortHabitsByName,
} from './helpers';

export interface HabitsContextValue {
    habits: Habit[];
    date: string;
    setDate: (date: string) => void;
    isLoading: boolean;
    onComplete: (habitId: string, state: boolean) => Promise<void>;
}

export interface HabitsProviderProps {
    children: React.ReactNode;
}

export const HabitsContext = createContext<HabitsContextValue>(
    {} as HabitsContextValue
);

export const HabitsProvider: React.FC<HabitsProviderProps> = ({ children }) => {
    const {
        habits,
        completedMap,
        habitsLoaded,
        setHabits,
        setCompletedMap,
        completeHabit,
        isCompletedMapByDate,
    } = useHabitStore();
    const {
        isLoading,
        getHabits,
        getHabitCompletedMap,
        completeHabit: completeHabitAPI,
    } = useHabitAPI();
    const [selectDate, setSelectDate] = useState(
        formatDate(new Date(), 'YYYY-MM-DD')
    );

    const fetchHabits = useCallback(async () => {
        const { success, data } = await getHabits();
        if (success) {
            setHabits(data);
        }
    }, [getHabits, setHabits]);

    const fetchHabitsChecks = useCallback(
        async (date: string) => {
            const { success, data } = await getHabitCompletedMap(date);
            if (success) {
                setCompletedMap(data);
            }
        },
        [getHabitCompletedMap, setCompletedMap]
    );

    useEffect(() => {
        if (!habitsLoaded) {
            fetchHabits();
        }
    }, [fetchHabits, habitsLoaded]);

    useEffect(() => {
        const monthDate = getMonthDate(selectDate);
        if (!isCompletedMapByDate(monthDate)) {
            fetchHabitsChecks(monthDate);
        }
    }, [fetchHabitsChecks, selectDate, isCompletedMapByDate]);

    const dateHabits = sortHabitsByName(filterHabitsByDate(habits, selectDate));

    const habitsWithComplete = useMemo(
        () => combineHabitsComplete(dateHabits, completedMap, selectDate),
        [completedMap, dateHabits, selectDate]
    );

    // TODO: use hook useOptimistic
    const onComplete = async (habitId: string, state: boolean) => {
        completeHabit(habitId, selectDate, state);
        const { success, data } = await completeHabitAPI(
            habitId,
            selectDate,
            state
        );
        completeHabit(habitId, selectDate, success ? data : !state);
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const contextValue = {
        habits: habitsWithComplete,
        date: selectDate,
        setDate: setSelectDate,
        isLoading,
        selectDate,
        onComplete,
    };

    return (
        <HabitsContext.Provider value={contextValue}>
            {children}
        </HabitsContext.Provider>
    );
};
