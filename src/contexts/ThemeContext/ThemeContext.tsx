import {
    createContext,
    useCallback,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';

import { ThemeEnum } from '@/constants';
import { useTelegramApp } from '@/hooks';
import { getTheme, isValidTheme, setTheme, setThemeToStorage } from '@/utils';

import { clearCustomColors, setCustomTelegramColors } from './helpers';

export interface ThemeContextValue {
    theme: ThemeEnum;
    setTheme: (theme: ThemeEnum) => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextValue>(
    {} as ThemeContextValue
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [contextTheme, setContextTheme] = useState(getTheme);
    const { isTelegramApp, tgColorTheme } = useTelegramApp();

    useLayoutEffect(() => {
        setTheme(contextTheme);
    }, [contextTheme]);

    useLayoutEffect(() => {
        const listener = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT);
        };

        const useDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (contextTheme === ThemeEnum.SYSTEM) {
            useDark.addEventListener('change', listener);
        }

        return () => {
            useDark.removeEventListener('change', listener);
        };
    }, [contextTheme]);

    // set custom theme
    useLayoutEffect(() => {
        let isCustomColors = false;
        if (contextTheme === ThemeEnum.SYSTEM) {
            if (isTelegramApp && tgColorTheme) {
                isCustomColors = true;
                setCustomTelegramColors(tgColorTheme);
            }
        }
        return () => {
            if (isCustomColors) {
                clearCustomColors();
            }
        };
    }, [contextTheme, isTelegramApp, tgColorTheme]);

    const setNewContextTheme = useCallback((theme: ThemeEnum) => {
        if (isValidTheme(theme)) {
            setThemeToStorage(theme);
            setContextTheme(theme);
        }
    }, []);

    const contextValue = useMemo(
        () => ({
            theme: contextTheme,
            setTheme: setNewContextTheme,
        }),
        [contextTheme, setNewContextTheme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
