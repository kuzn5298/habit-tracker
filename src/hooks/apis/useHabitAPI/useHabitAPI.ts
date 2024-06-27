import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FIREBASE_CODES_MAP } from '@/constants';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { habitService } from '@/services';
import { HabitWithoutId } from '@/types';

import { useToast } from '../../useToast';
import { CreateHabitAPIResponse, GetHabitsAPIResponse } from './types';

interface UseHabitAPI {
    isLoading: boolean;
    getHabits: () => Promise<GetHabitsAPIResponse>;
    createHabit: (data: HabitWithoutId) => Promise<CreateHabitAPIResponse>;
}

export const useHabitAPI = (): UseHabitAPI => {
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const getHabits = useCallback(async (): Promise<GetHabitsAPIResponse> => {
        try {
            setIsLoading(true);
            const habits = await habitService.getHabits();
            return { success: true, data: habits };
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return { success: false, data: null };
        } finally {
            setIsLoading?.(false);
        }
    }, [t, toast]);

    const createHabit = useCallback(
        async (data: HabitWithoutId): Promise<CreateHabitAPIResponse> => {
            try {
                setIsLoading(true);
                const habit = await habitService.addHabit(data);
                return { success: true, data: habit };
            } catch (e) {
                const message = getFirebaseTranslationMessage(
                    e,
                    FIREBASE_CODES_MAP,
                    t
                );
                toast.error(message);
                return { success: false, data: null };
            } finally {
                setIsLoading?.(false);
            }
        },
        [t, toast]
    );

    return {
        isLoading,
        getHabits,
        createHabit,
    };
};
