import { AddHabitScreenEnum } from './constants';
import { AddHabitProvider } from './context';
import { useAddHabit } from './hooks';
import {
    AddHabitScreen,
    IconsScreen,
    RepeatScreen,
    StartDateScreen,
} from './screens';

const AddHabit: React.FC = () => {
    const { screen } = useAddHabit();
    switch (screen) {
        case AddHabitScreenEnum.AddScreen:
            return <AddHabitScreen />;
        case AddHabitScreenEnum.IconsScreen:
            return <IconsScreen />;
        case AddHabitScreenEnum.StartDateScreen:
            return <StartDateScreen />;
        case AddHabitScreenEnum.RepeatScreen:
            return <RepeatScreen />;
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
