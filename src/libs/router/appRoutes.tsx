import { Navigate, RouteObject } from 'react-router-dom';

import { PageWrapper, PrivateRoute, PublicRoute } from '@/components/app';
import { AppRouteEnum } from '@/constants';
import { HabitsList, NotFound, Settings } from '@/pages';

import AUTH_ROUTES from './authRoutes';
import HABITS_ROUTES from './habitsRoutes';
import SETTINGS_ROUTES from './settingsRoutes';

const APP_ROUTES: RouteObject[] = [
    {
        element: <PublicRoute />,
        children: AUTH_ROUTES,
    },
    {
        path: AppRouteEnum.HABITS,
        element: (
            <PrivateRoute
                element={
                    <PageWrapper
                        element={<HabitsList />}
                        path={AppRouteEnum.HABITS}
                    />
                }
            />
        ),
        children: HABITS_ROUTES,
    },
    {
        path: AppRouteEnum.SETTINGS,
        element: (
            <PrivateRoute
                element={
                    <PageWrapper
                        element={<Settings />}
                        path={AppRouteEnum.SETTINGS}
                    />
                }
            />
        ),
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
