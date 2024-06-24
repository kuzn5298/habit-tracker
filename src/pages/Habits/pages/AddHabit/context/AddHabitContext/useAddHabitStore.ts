import { create } from 'zustand';

import { AddHabitScreenEnum } from '../../constants';

export interface AddHabitStore {
    screen: AddHabitScreenEnum;
}

interface AddHabitActions {
    resetState: () => void;
    setScreen: (screen: AddHabitScreenEnum) => void;
}

const INITIAL_STATE: AddHabitStore = {
    screen: AddHabitScreenEnum.AddScreen,
};

export const useAddHabitStore = create<AddHabitStore & AddHabitActions>(
    (set) => ({
        screen: INITIAL_STATE.screen,
        setScreen: (screen: AddHabitScreenEnum) => set({ screen }),
        resetState: () => set(INITIAL_STATE),
    })
);
