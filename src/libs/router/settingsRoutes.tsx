import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { Language, Settings, Theme } from '@/pages';

const SETTINGS_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.SETTINGS,
        element: <Settings />,
    },
    {
        path: AppRouteEnum.SETTINGS_THEME,
        element: <Theme />,
    },
    {
        path: AppRouteEnum.SETTINGS_LANGUAGE,
        element: <Language />,
    },
];

export default SETTINGS_ROUTES;
