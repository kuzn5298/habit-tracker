import { useState } from 'react';

import { AddHabitScreenEnum } from '../../constants';
import { AddHabitScreen } from '../../screens';

const AddHabit: React.FC = () => {
    const [screen] = useState(AddHabitScreenEnum.AddScreen);

    switch (screen) {
        case AddHabitScreenEnum.AddScreen:
            return <AddHabitScreen />;
        default:
            return null;
    }
};

export default AddHabit;
