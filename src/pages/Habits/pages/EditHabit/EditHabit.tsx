import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { HabitScreenEnum } from '../../constants';
import { IconsScreen, RepeatScreen, StartDateScreen } from '../../screens';
import { EditHabitProvider } from './contexts';
import { useEditHabit } from './hooks';
import { EditHabitScreen } from './screens';

const EditHabit: React.FC = () => {
    const { screen, form, setScreen } = useEditHabit();
    const { t } = useTranslation('habits');

    const onBack = useCallback(
        () => setScreen(HabitScreenEnum.MainScreen),
        [setScreen]
    );

    switch (screen) {
        case HabitScreenEnum.MainScreen:
            return <EditHabitScreen />;
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

const EddHabitWithContext: React.FC = (props) => (
    <EditHabitProvider>
        <EditHabit {...props} />
    </EditHabitProvider>
);

export default EddHabitWithContext;
