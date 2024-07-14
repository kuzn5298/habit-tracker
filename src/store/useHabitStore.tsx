import _ from 'lodash';
import { create } from 'zustand';

import { Habit, HabitsCompletedByDate } from '@/types';

export interface HabitStore {
    habits: Habit[];
    completedMap: HabitsCompletedByDate;
    habitsLoaded: boolean;
}

interface HabitActions {
    resetStore: () => void;
    setHabits: (habits: Habit[]) => void;
    addHabit: (habit: Habit) => void;
    updateHabit: (habit: Habit) => void;
    getHabit: (habitId: string) => Habit | null;
    removeHabit: (id: string) => void;
    setCompletedMap: (completedMap: HabitsCompletedByDate) => void;
    completeHabit: (habitId: string, date: string, state: boolean) => void;
    isCompletedMapByDate: (date: string) => boolean;
}

const INITIAL_STATE: HabitStore = {
    habits: [],
    completedMap: {},
    habitsLoaded: false,
};

export const useHabitStore = create<HabitStore & HabitActions>((set, get) => ({
    habits: INITIAL_STATE.habits,
    completedMap: INITIAL_STATE.completedMap,
    habitsLoaded: INITIAL_STATE.habitsLoaded,
    addHabit: (habit: Habit) => set({ habits: [...get().habits, habit] }),
    updateHabit: (habit: Habit) =>
        set({
            habits: get().habits.map((h) => {
                return h.id === habit.id ? habit : h;
            }),
        }),
    removeHabit: (id: string) =>
        set({ habits: get().habits.filter((habit) => habit.id !== id) }),
    setHabits: (habits: Habit[]) => set({ habits, habitsLoaded: true }),
    getHabit: (habitId: string) => {
        const habit = get().habits.find(({ id }) => id === habitId);
        return habit ? { ...habit } : null;
    },
    setCompletedMap: (completedMap: HabitsCompletedByDate) =>
        set({ completedMap: _.merge(get().completedMap, completedMap) }),
    completeHabit: (habitId: string, date: string, state: boolean) => {
        const { completedMap } = get();
        const [year, month, day] = date.split('-');
        const mergeCompletedMap = _.merge(completedMap, {
            [year]: {
                [month]: {
                    [day]: {
                        [habitId]: {
                            completed: state,
                        },
                    },
                },
            },
        });
        return set({ completedMap: mergeCompletedMap });
    },
    isCompletedMapByDate: (date: string) => {
        const dateArr = date.split('-');
        const { completedMap } = get();
        const dataByDate = dateArr.reduce(
            (acc, key) => {
                return acc?.[key] as Record<string, unknown>;
            },
            completedMap as Record<string, unknown>
        );
        return Boolean(dataByDate);
    },
    resetStore: () => set(INITIAL_STATE),
}));
