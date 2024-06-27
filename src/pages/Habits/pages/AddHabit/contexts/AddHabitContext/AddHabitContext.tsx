import { createContext, useCallback, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { usePageDialog } from '@/components/custom';
import { useHabitAPI, useToast } from '@/hooks';
import { useHabitStore } from '@/store';
import { HabitWithoutId } from '@/types';

import { AddHabitScreenEnum } from '../../constants';
import { INIT_FORM_VALUES } from './AddHabit.constants';
import { addHabitResolver } from './AddHabit.resolver';

export interface AddHabitContextValue {
    screen: AddHabitScreenEnum;
    setScreen: (screen: AddHabitScreenEnum) => void;
    form: UseFormReturn<HabitWithoutId>;
    isLoading: boolean;
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
    const [screen, setScreen] = useState(AddHabitScreenEnum.AddScreen);
    const { onClose } = usePageDialog();
    const { t } = useTranslation('habits');
    const { toast } = useToast();
    const { addHabit } = useHabitStore();
    const { isLoading, createHabit } = useHabitAPI();

    const form = useForm<HabitWithoutId>({
        defaultValues: INIT_FORM_VALUES,
        resolver: addHabitResolver,
    });

    const onFormValid = useCallback(
        async (habit: HabitWithoutId) => {
            const { success, data } = await createHabit(habit);
            if (success) {
                addHabit(data);
                toast.success(t('HABIT_SAVED_SUCCESS'));
                onClose();
            }
        },
        [createHabit, addHabit, toast, t, onClose]
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
                isLoading,
                onSave,
            }}
        >
            {children}
        </AddHabitContext.Provider>
    );
};
