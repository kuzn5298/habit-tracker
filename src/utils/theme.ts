import { DEFAULT_THEME, THEME_STORAGE_NAME, ThemeEnum } from '@/constants';
import storage from '@/libs/storage';

export const isValidTheme = (theme: unknown): theme is ThemeEnum =>
    Object.values(ThemeEnum).includes(theme as ThemeEnum);

export const setThemeToStorage = (theme: ThemeEnum) => {
    storage.set(THEME_STORAGE_NAME, theme);
};

export const getThemeFromStorage = () => {
    const theme = storage.get(THEME_STORAGE_NAME);
    return isValidTheme(theme) ? theme : null;
};

export const getSystemPreferTheme = () => {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    )?.matches;
    if (prefersDark) return ThemeEnum.DARK;
    return ThemeEnum.LIGHT;
};

export const getTheme = () => {
    const storageTheme = getThemeFromStorage();
    return storageTheme ?? DEFAULT_THEME;
};

export const setThemeColor = () => {
    const CSS_VARIABLE_NAME = '--background';

    const cssVariable = getComputedStyle(
        document.documentElement
    ).getPropertyValue(CSS_VARIABLE_NAME);

    if (cssVariable) {
        const color = `hsl(${cssVariable})`;
        document
            .querySelector("meta[name='theme-color']")
            ?.setAttribute('content', color);
    }
};

export const setTheme = (theme: ThemeEnum) => {
    let themeName = theme;
    if (theme === ThemeEnum.SYSTEM) {
        themeName = getSystemPreferTheme();
    }
    document.documentElement.setAttribute('data-theme', themeName);

    setThemeColor();
};
