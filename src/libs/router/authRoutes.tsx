import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { Login, TelegramLogin, Verification } from '@/pages';

const AUTH_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.LOGIN,
        element: <Login />,
    },
    {
        path: AppRouteEnum.TELEGRAM_LOGIN,
        element: <TelegramLogin />,
    },
    {
        path: AppRouteEnum.VERIFICATION,
        element: <Verification />,
    },
];

export default AUTH_ROUTES;
