import { MapObject } from '@/types';

import { ThemeEnum } from '../enums';

export const THEME_STORAGE_NAME = 'theme';

export const DEFAULT_THEME = ThemeEnum.SYSTEM;

export const THEMES_MAP: MapObject<ThemeEnum, string> = {
    [ThemeEnum.SYSTEM]: 'SYSTEM_THEME',
    [ThemeEnum.LIGHT]: 'LIGHT_THEME',
    [ThemeEnum.DARK]: 'DARK_THEME',
};

export const AVAILABLE_THEMES = [
    ThemeEnum.SYSTEM,
    ThemeEnum.LIGHT,
    ThemeEnum.DARK,
];
