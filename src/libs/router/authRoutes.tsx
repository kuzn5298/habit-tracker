import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { Login, Verification } from '@/pages';

const AUTH_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.LOGIN,
        element: <Login />,
    },
    {
        path: AppRouteEnum.VERIFICATION,
        element: <Verification />,
    },
];

export default AUTH_ROUTES;
