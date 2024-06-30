import { create } from 'zustand';

import { Habit } from '@/types';

export interface HabitStore {
    habits: Habit[];
    loaded: boolean;
}

interface HabitActions {
    resetStore: () => void;
    setHabits: (habits: Habit[]) => void;
    addHabit: (habit: Habit) => void;
    updateHabit: (habit: Habit) => void;
    getHabit: (habitId: string) => Habit | null;
    removeHabit: (id: string) => void;
}

const INITIAL_STATE: HabitStore = {
    habits: [],
    loaded: false,
};

export const useHabitStore = create<HabitStore & HabitActions>((set, get) => ({
    habits: INITIAL_STATE.habits,
    loaded: INITIAL_STATE.loaded,
    addHabit: (habit: Habit) => set({ habits: [...get().habits, habit] }),
    updateHabit: (habit: Habit) =>
        set({
            habits: get().habits.map((h) => {
                return h.id === habit.id ? habit : h;
            }),
        }),
    removeHabit: (id: string) =>
        set({ habits: get().habits.filter((habit) => habit.id !== id) }),
    setHabits: (habits: Habit[]) => set({ habits, loaded: true }),
    getHabit: (habitId: string) => {
        const habit = get().habits.find(({ id }) => id === habitId);
        return habit ? { ...habit } : null;
    },
    resetStore: () => set(INITIAL_STATE),
}));
