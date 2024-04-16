import { create } from 'zustand';

import { Habit } from '@/types';

import { AddHabitScreenEnum } from '../../constants';
import { INIT_FORM_VALUES } from './AddHabit.constants';

export interface AddHabitStore {
    formValues: Partial<Habit>;
    screen: AddHabitScreenEnum;
}

interface AddHabitActions {
    resetState: () => void;
    setFormValues: (values: Partial<Habit>) => void;
    setScreen: (screen: AddHabitScreenEnum) => void;
}

const INITIAL_STATE: AddHabitStore = {
    formValues: INIT_FORM_VALUES,
    screen: AddHabitScreenEnum.AddScreen,
};

export const useAddHabitStore = create<AddHabitStore & AddHabitActions>(
    (set) => ({
        formValues: INITIAL_STATE.formValues,
        screen: INITIAL_STATE.screen,
        setFormValues: (formValues: Partial<Habit>) => set({ formValues }),
        setScreen: (screen: AddHabitScreenEnum) => set({ screen }),
        resetState: () => set(INITIAL_STATE),
    })
);
