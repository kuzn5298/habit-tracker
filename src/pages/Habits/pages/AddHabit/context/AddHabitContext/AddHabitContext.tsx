import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { AppRouteEnum } from '@/constants';
import { Habit } from '@/types';

import { AddHabitScreenEnum } from '../../constants';
import { useAddHabitStore } from './useAddHabitStore';

export interface AddHabitContextValue {
    screen: AddHabitScreenEnum;
    setScreen: (screen: AddHabitScreenEnum) => void;
    form: UseFormReturn<Habit>;
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
    const { formValues, setFormValues, screen, setScreen, resetState } =
        useAddHabitStore();

    const form = useForm<Habit>({
        defaultValues: formValues,
    });

    useEffect(
        () => () => {
            const isAddHabitPage =
                window.location.pathname === AppRouteEnum.ADD_HABIT;
            if (isAddHabitPage) {
                const v = form.getValues();
                setFormValues(v);
            } else {
                resetState();
            }
        },
        [form, setFormValues, resetState]
    );

    const onSave = useCallback(
        () => form.handleSubmit((e) => console.log(e))(),
        [form]
    );

    const contextValue = useMemo(
        () => ({
            screen,
            setScreen,
            form,
            onSave,
        }),
        [screen, setScreen, form, onSave]
    );
    return (
        <AddHabitContext.Provider value={contextValue}>
            {children}
        </AddHabitContext.Provider>
    );
};
