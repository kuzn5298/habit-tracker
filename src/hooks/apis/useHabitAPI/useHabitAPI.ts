import { useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import { FIREBASE_CODES_MAP } from '@/constants';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { habitService } from '@/services';
import { HabitWithoutId } from '@/types';

import { useToast } from '../../useToast';
import { APIResponse, RESPONSE_ERROR, RESPONSE_SUCCESS } from '../helpers';
import {
    CompleteHabitAPIResponse,
    CreateHabitAPIResponse,
    GetHabitsAPIResponse,
    GetHabitsCompletedMapAPIResponse,
} from './types';

interface UseHabitAPI {
    isLoading: boolean;
    getHabits: () => Promise<GetHabitsAPIResponse>;
    getHabitCompletedMap: (
        date: string
    ) => Promise<GetHabitsCompletedMapAPIResponse>;
    createHabit: (data: HabitWithoutId) => Promise<CreateHabitAPIResponse>;
    updateHabit: (
        id: string,
        data: HabitWithoutId
    ) => Promise<CreateHabitAPIResponse>;
    deleteHabit: (id: string) => Promise<APIResponse>;
    completeHabit: (
        id: string,
        date: string,
        state: boolean
    ) => Promise<CompleteHabitAPIResponse>;
}
type LoadingObj = Record<string, boolean>;

const loadingReducer = (state: LoadingObj, action: LoadingObj) => ({
    ...state,
    ...action,
});

export const useHabitAPI = (): UseHabitAPI => {
    const [loadingObj, setLoadingObj] = useReducer(loadingReducer, {});
    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const isLoading = Object.values(loadingObj).some((s) => s);

    const setLoading = useCallback((id: string, state: boolean) => {
        setLoadingObj({ [id]: state });
    }, []);

    const getHabits = useCallback(async (): Promise<GetHabitsAPIResponse> => {
        try {
            setLoading('getHabits', true);
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
            setLoading?.('getHabits', false);
        }
    }, [setLoading, t, toast]);

    const getHabitCompletedMap = useCallback(
        async (date: string): Promise<GetHabitsCompletedMapAPIResponse> => {
            try {
                setLoading('getHabitCompletedMap', true);
                const checks = await habitService.getHabitCompletedMap(date);
                return { success: true, data: checks };
            } catch (e) {
                const message = getFirebaseTranslationMessage(
                    e,
                    FIREBASE_CODES_MAP,
                    t
                );
                toast.error(message);
                return { success: false, data: null };
            } finally {
                setLoading?.('getHabitCompletedMap', false);
            }
        },
        [setLoading, t, toast]
    );

    const createHabit = async (
        data: HabitWithoutId
    ): Promise<CreateHabitAPIResponse> => {
        try {
            setLoading('createHabit', true);
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
            setLoading?.('createHabit', false);
        }
    };

    const updateHabit = async (
        id: string,
        data: HabitWithoutId
    ): Promise<CreateHabitAPIResponse> => {
        try {
            setLoading('updateHabit', true);
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
            setLoading?.('updateHabit', false);
        }
    };

    const deleteHabit = async (id: string): Promise<APIResponse> => {
        try {
            setLoading('deleteHabit', true);
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
            setLoading?.('deleteHabit', true);
        }
    };

    const completeHabit = async (
        id: string,
        date: string,
        state: boolean
    ): Promise<CompleteHabitAPIResponse> => {
        try {
            const newState = await habitService.completeHabit(id, date, state);
            return {
                success: true,
                data: newState,
            };
        } catch (e) {
            const message = getFirebaseTranslationMessage(
                e,
                FIREBASE_CODES_MAP,
                t
            );
            toast.error(message);
            return { success: false, data: null };
        }
    };

    return {
        isLoading,
        getHabits,
        getHabitCompletedMap,
        createHabit,
        updateHabit,
        deleteHabit,
        completeHabit,
    };
};
