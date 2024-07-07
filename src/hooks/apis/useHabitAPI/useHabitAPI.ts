import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FIREBASE_CODES_MAP } from '@/constants';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { habitService } from '@/services';
import { HabitWithoutId } from '@/types';

import { useToast } from '../../useToast';
import { APIResponse, RESPONSE_ERROR, RESPONSE_SUCCESS } from '../helpers';
import { CreateHabitAPIResponse, GetHabitsAPIResponse } from './types';

interface UseHabitAPI {
    isLoading: boolean;
    getHabits: () => Promise<GetHabitsAPIResponse>;
    createHabit: (data: HabitWithoutId) => Promise<CreateHabitAPIResponse>;
    updateHabit: (
        id: string,
        data: HabitWithoutId
    ) => Promise<CreateHabitAPIResponse>;
    deleteHabit: (id: string) => Promise<APIResponse>;
}

export const useHabitAPI = (): UseHabitAPI => {
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const getHabits = async (): Promise<GetHabitsAPIResponse> => {
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
    };

    const createHabit = async (
        data: HabitWithoutId
    ): Promise<CreateHabitAPIResponse> => {
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
    };

    const updateHabit = async (
        id: string,
        data: HabitWithoutId
    ): Promise<CreateHabitAPIResponse> => {
        try {
            setIsLoading(true);
            const habit = await habitService.updateHabit(id, data);
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
    };

    const deleteHabit = async (id: string): Promise<APIResponse> => {
        try {
            setIsLoading(true);
            await habitService.deleteHabit(id);
            return RESPONSE_SUCCESS;
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return RESPONSE_ERROR;
        } finally {
            setIsLoading?.(false);
        }
    };

    return {
        isLoading,
        getHabits,
        createHabit,
        updateHabit,
        deleteHabit,
    };
};
