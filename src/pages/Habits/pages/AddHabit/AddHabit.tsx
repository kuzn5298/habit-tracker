import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { HabitScreenEnum } from '../../constants';
import { IconsScreen, RepeatScreen, StartDateScreen } from '../../screens';
import { AddHabitProvider } from './contexts';
import { useAddHabit } from './hooks';
import { AddHabitScreen } from './screens';

const AddHabit: React.FC = () => {
    const { screen, form, setScreen } = useAddHabit();
    const { t } = useTranslation('habits');

    const onBack = useCallback(
        () => setScreen(HabitScreenEnum.MainScreen),
        [setScreen]
    );

    switch (screen) {
        case HabitScreenEnum.MainScreen:
            return <AddHabitScreen />;
        case HabitScreenEnum.IconsScreen:
            return (
                <IconsScreen
                    title={t('HABIT_ICON')}
                    name="icon"
                    control={form.control}
                    onBack={onBack}
                />
            );
        case HabitScreenEnum.StartDateScreen:
            return (
                <StartDateScreen
                    title={t('HABIT_START_DATE')}
                    name="startDate"
                    control={form.control}
                    onBack={onBack}
                />
            );
        case HabitScreenEnum.RepeatScreen:
            return (
                <RepeatScreen
                    title={t('HABIT_REPEAT')}
                    typeName="repeatType"
                    listName="repeatList"
                    control={form.control}
                    onBack={onBack}
                />
            );
        default:
            return null;
    }
};

const AddHabitWithContext: React.FC = (props) => (
    <AddHabitProvider>
        <AddHabit {...props} />
    </AddHabitProvider>
);

export default AddHabitWithContext;
