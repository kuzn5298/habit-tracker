import {
    createContext,
    useState,
    useCallback,
    useMemo,
    useLayoutEffect,
} from 'react';
import { getTheme, isValidTheme, setTheme, setThemeToStorage } from '@utils';
import { ThemeEnum } from '@constants';

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
