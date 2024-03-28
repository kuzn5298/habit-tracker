import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { AddHabit, Habits } from '@/pages';

const HABITS_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.HABITS,
        element: <Habits />,
    },
    {
        path: AppRouteEnum.ADD_HABIT,
        element: <AddHabit />,
    },
];

export default HABITS_ROUTES;
