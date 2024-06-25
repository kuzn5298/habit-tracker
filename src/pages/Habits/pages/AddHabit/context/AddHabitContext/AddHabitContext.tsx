import { createContext, useCallback, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { usePageDialog } from '@/components/custom';
import { FIREBASE_CODES_MAP } from '@/constants';
import { useToast } from '@/hooks';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import { habitService } from '@/services';
import { HabitWithoutId } from '@/types';

import { AddHabitScreenEnum } from '../../constants';
import { INIT_FORM_VALUES } from './AddHabit.constants';
import { addHabitResolver } from './AddHabit.resolver';
import { useAddHabitStore } from './useAddHabitStore';

export interface AddHabitContextValue {
    screen: AddHabitScreenEnum;
    setScreen: (screen: AddHabitScreenEnum) => void;
    form: UseFormReturn<HabitWithoutId>;
    loading: boolean;
    onSave: () => void;
}

export interface AddHabitProviderProps {
    children: React.ReactNode;
}

export const AddHabitContext = createContext<AddHabitContextValue>(
    {} as AddHabitContextValue
);

export const AddHabitProvider: React.FC<AddHabitProviderProps> = ({
    children,
}) => {
    const [loading, setLoading] = useState(false);
    const { onClose } = usePageDialog();
    const { screen, setScreen, resetState } = useAddHabitStore();
    const { t } = useTranslation(['errors', 'habits']);
    const { toast } = useToast();

    useEffect(
        () => () => {
            resetState();
        },
        [resetState]
    );

    const form = useForm<HabitWithoutId>({
        defaultValues: INIT_FORM_VALUES,
        resolver: addHabitResolver,
    });

    const onFormValid = useCallback(
        async (data: HabitWithoutId) => {
            try {
                setLoading(true);
                await habitService.addHabit(data);
                toast.success(t('habits:HABIT_SAVED_SUCCESS'));
                onClose();
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
        },
        [t, toast, onClose, setLoading]
    );

    const onSave = useCallback(async () => {
        form.handleSubmit(onFormValid)();
    }, [form, onFormValid]);

    return (
        <AddHabitContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                screen,
                setScreen,
                form,
                loading,
                onSave,
            }}
        >
            {children}
        </AddHabitContext.Provider>
    );
};
