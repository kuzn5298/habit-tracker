import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { NotFound, PrivateRoute, PublicRoute } from '@/pages';

import AUTH_ROUTES from './authRoutes';
import HABITS_ROUTES from './habitsRoutes';
import SETTINGS_ROUTES from './settingsRoutes';

const APP_ROUTES: RouteObject[] = [
    {
        element: <PublicRoute />,
        children: AUTH_ROUTES,
    },
    {
        element: <PrivateRoute />,
        children: HABITS_ROUTES,
    },
    {
        element: <PrivateRoute />,
        children: SETTINGS_ROUTES,
    },
    {
        path: AppRouteEnum.NOT_FOUND,
        element: <NotFound />,
    },
    {
        path: AppRouteEnum.MAIN,
        element: <Navigate to={AppRouteEnum.HABITS} />,
    },
    {
        path: AppRouteEnum.ANY,
        element: <Navigate to={AppRouteEnum.NOT_FOUND} />,
    },
];

export default APP_ROUTES;
