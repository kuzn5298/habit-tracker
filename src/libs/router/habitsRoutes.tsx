import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { AddHabit, EditHabit } from '@/pages';

const HABITS_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.ADD_HABIT,
        element: <AddHabit />,
    },
    {
        path: AppRouteEnum.EDIT_HABIT,
        element: <EditHabit />,
    },
];

export default HABITS_ROUTES;
