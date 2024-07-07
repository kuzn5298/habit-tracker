import { createContext, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { usePageDialog } from '@/components/custom';
import { useHabitAPI, useToast } from '@/hooks';
import { useHabitStore } from '@/store';
import { HabitWithoutId } from '@/types';

import { HabitScreenEnum, INIT_FORM_VALUES } from '../../../../constants';
import { habitResolver } from '../../../../resolvers';

export interface EditHabitContextValue {
    screen: HabitScreenEnum;
    setScreen: (screen: HabitScreenEnum) => void;
    form: UseFormReturn<HabitWithoutId>;
    isLoading: boolean;
    onSave: () => void;
    onRemove: () => void;
}

export interface EditHabitProviderProps {
    children: React.ReactNode;
}

export const EditHabitContext = createContext<EditHabitContextValue>(
    {} as EditHabitContextValue
);

export const EditHabitProvider: React.FC<EditHabitProviderProps> = ({
    children,
}) => {
    const [screen, setScreen] = useState(HabitScreenEnum.MainScreen);
    const { onClose } = usePageDialog();
    const { t } = useTranslation('habits');
    const { toast } = useToast();
    const { getHabit, updateHabit, loaded, removeHabit } = useHabitStore();
    const {
        isLoading: isApiLoading,
        updateHabit: updateHabitAPI,
        deleteHabit: deleteHabitAPI,
    } = useHabitAPI();

    const { habitId } = useParams();
    const isLoading = !loaded || isApiLoading;

    const form = useForm<HabitWithoutId>({
        defaultValues: INIT_FORM_VALUES,
        resolver: habitResolver,
    });

    useEffect(() => {
        if (loaded) {
            const habit = habitId ? getHabit(habitId) : null;
            if (habit) {
                form.reset(habit);
            } else {
                onClose();
            }
        }
    }, [loaded, form, getHabit, habitId, onClose]);

    const onFormValid = async (habit: HabitWithoutId) => {
        if (habitId) {
            const { success, data } = await updateHabitAPI(habitId, habit);
            if (success) {
                updateHabit(data);
                toast.success(t('HABIT_EDITED_SUCCESS'));
                onClose();
            }
        }
    };

    const onSave = async () => {
        form.handleSubmit(onFormValid)();
    };

    const onRemove = async () => {
        if (habitId) {
            const { success } = await deleteHabitAPI(habitId);
            if (success) {
                removeHabit(habitId);
                toast.success(t('HABIT_DELETED_SUCCESS'));
                onClose();
            }
        }
    };

    return (
        <EditHabitContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                screen,
                setScreen,
                form,
                isLoading,
                onSave,
                onRemove,
            }}
        >
            {children}
        </EditHabitContext.Provider>
    );
};
