import { createContext, useCallback, useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { HabitWithoutId } from '@/types';

import { AddHabitScreenEnum } from '../../constants';
import { INIT_FORM_VALUES } from './AddHabit.constants';
import { addHabitResolver } from './AddHabit.resolver';
import { useAddHabitStore } from './useAddHabitStore';

export interface AddHabitContextValue {
    screen: AddHabitScreenEnum;
    setScreen: (screen: AddHabitScreenEnum) => void;
    form: UseFormReturn<HabitWithoutId>;
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
    const { screen, setScreen, resetState } = useAddHabitStore();

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

    const onSave = useCallback(
        () =>
            form.handleSubmit(
                (e) => console.log(e),
                (err) => console.log(err)
            )(),
        [form]
    );

    return (
        <AddHabitContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                screen,
                setScreen,
                form,
                onSave,
            }}
        >
            {children}
        </AddHabitContext.Provider>
    );
};
