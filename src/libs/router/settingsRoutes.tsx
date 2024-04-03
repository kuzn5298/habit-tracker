import { RouteObject } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { LanguageSettings, ThemeSettings } from '@/pages';

const SETTINGS_ROUTES: RouteObject[] = [
    {
        path: AppRouteEnum.SETTINGS_THEME,
        element: <ThemeSettings />,
    },
    {
        path: AppRouteEnum.SETTINGS_LANGUAGE,
        element: <LanguageSettings />,
    },
];

export default SETTINGS_ROUTES;
