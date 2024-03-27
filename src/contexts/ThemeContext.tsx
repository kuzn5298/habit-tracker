import {
    createContext,
    useCallback,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';

import { ThemeEnum } from '@/constants';
import { getTheme, isValidTheme, setTheme, setThemeToStorage } from '@/utils';

export interface IThemeContext {
    theme: ThemeEnum;
    setTheme: (theme: ThemeEnum) => void;
}

export interface IThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [contextTheme, setContextTheme] = useState(getTheme);

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
