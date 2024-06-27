import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { FIREBASE_CODES_MAP } from '@/constants';
import { useToast } from '@/hooks';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { habitService } from '@/services';
import { useHabitStore } from '@/store';
import { Habit } from '@/types';

export interface HabitsContextValue {
    habits: Habit[];
    loading: boolean;
}

export interface HabitsProviderProps {
    children: React.ReactNode;
}

export const HabitsContext = createContext<HabitsContextValue>(
    {} as HabitsContextValue
);

export const HabitsProvider: React.FC<HabitsProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const { habits, loaded, setHabits } = useHabitStore();
    const { t } = useTranslation(['errors', 'habits']);
    const { toast } = useToast();

    const fetchHabits = useCallback(async () => {
        try {
            setLoading(true);
            const fetchedHabits = await habitService.getHabits();
            setHabits(fetchedHabits);
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
        } finally {
            setLoading?.(false);
        }
    }, [setHabits, t, toast]);

    useEffect(() => {
        if (!loaded) {
            fetchHabits();
        }
    }, [fetchHabits, loaded]);

    const contextValue = useMemo<HabitsContextValue>(
        () => ({ habits, loading }),
        [habits, loading]
    );

    return (
        <HabitsContext.Provider value={contextValue}>
            {children}
        </HabitsContext.Provider>
    );
};
