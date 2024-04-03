import { create } from 'zustand';

import storage from '@/libs/storage';

const ANIMATION_STORAGE_NAME = 'isAnimation';
const NOTIFICATION_STORAGE_NAME = 'isNotification';

export interface SettingsStore {
    animation: boolean;
    notification: boolean;
}

interface SettingsActions {
    toggleAnimation: () => void;
    toggleNotification: () => void;
}

const INITIAL_STATE: SettingsStore = {
    animation: Boolean(storage.get(ANIMATION_STORAGE_NAME) ?? true),
    notification: Boolean(storage.get(NOTIFICATION_STORAGE_NAME) ?? false),
};

export const useSettingsStore = create<SettingsStore & SettingsActions>(
    (set, get) => ({
        animation: INITIAL_STATE.animation,
        notification: INITIAL_STATE.notification,
        toggleAnimation: () => {
            const newAnimation = !get().animation;
            set({ animation: newAnimation });
            storage.set(ANIMATION_STORAGE_NAME, newAnimation);
        },
        toggleNotification: () => {
            const newNotification = !get().notification;
            set({ notification: newNotification });
            storage.set(NOTIFICATION_STORAGE_NAME, newNotification);
        },
    })
);
