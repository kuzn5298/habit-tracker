import { createContext, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageEnum } from '@/constants';

import '@/libs/i18n';

export interface LanguageContextValue {
    language: string;
    changeLanguage: (lng: LanguageEnum) => void;
}

export interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextValue>(
    {} as LanguageContextValue
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const { i18n } = useTranslation();

    const language = useMemo(() => i18n.language, [i18n.language]);

    const changeLanguage = useCallback(
        (lng: LanguageEnum): void => {
            i18n.changeLanguage(lng);
        },
        [i18n]
    );

    const contextValue = useMemo(
        () => ({
            language,
            changeLanguage,
        }),
        [language, changeLanguage]
    );

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
