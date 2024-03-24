import { DEFAULT_THEME, THEME_STORAGE_NAME, ThemeEnum } from '@constants';
import { storage } from '@libs';

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
    const prefersLight = window.matchMedia(
        '(prefers-color-scheme: light)'
    )?.matches;
    if (prefersLight) return ThemeEnum.LIGHT;
    return null;
};

export const getTheme = () => {
    const storageTheme = getThemeFromStorage();
    const systemPreferTheme = getSystemPreferTheme();
    return storageTheme ?? systemPreferTheme ?? DEFAULT_THEME;
};

export const setTheme = (theme: ThemeEnum) => {
    document.documentElement.setAttribute('data-theme', theme);

    const cssVariable = getComputedStyle(
        document.documentElement
    ).getPropertyValue('--bg-primary');
    if (cssVariable) {
        const color = `rgb(${cssVariable})`;
        document
            .querySelector("meta[name='theme-color']")
            ?.setAttribute('content', color);
    }
};

export const getOppositeTheme = (theme: ThemeEnum) =>
    theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
