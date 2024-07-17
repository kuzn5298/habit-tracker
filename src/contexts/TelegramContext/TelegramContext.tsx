import {
    createContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';

import { expandTelegramApp, transformData } from './helpers';

export interface TelegramContextValue {
    isTelegramApp: boolean;
    tgColorTheme: Record<string, string>;
    tgData: Record<string, string>;
    tgUser: Record<string, string>;
}

export interface TelegramProviderProps {
    children: React.ReactNode;
}

export const TelegramContext = createContext<TelegramContextValue>(
    {} as TelegramContextValue
);

export const TelegramProvider: React.FC<TelegramProviderProps> = ({
    children,
}) => {
    const [isTelegramApp, setIsTelegramApp] = useState(false);
    const [tgColorTheme, setTgColorTheme] = useState<Record<string, string>>(
        {}
    );
    const [tgData, setTgDate] = useState<Record<string, string>>({});
    const [tgUser, setTgUser] = useState<Record<string, string>>({});

    useEffect(() => {
        expandTelegramApp();
    }, []);

    useLayoutEffect(() => {
        const dataString = window.location.hash.substring(1);
        const { tgWebAppData, tgWebAppThemeParams } = transformData(dataString);
        if (tgWebAppData) {
            const data = transformData(tgWebAppData) ?? {};
            const colorTheme = JSON.parse(tgWebAppThemeParams) ?? {};
            const user = JSON.parse(data.user) ?? {};

            setIsTelegramApp(true);
            setTgColorTheme(colorTheme);
            setTgDate(data);
            setTgUser(user);
        }
    }, []);

    const contextValue = useMemo(
        () => ({ isTelegramApp, tgColorTheme, tgData, tgUser }),
        [isTelegramApp, tgColorTheme, tgData, tgUser]
    );

    return (
        <TelegramContext.Provider value={contextValue}>
            {children}
        </TelegramContext.Provider>
    );
};
