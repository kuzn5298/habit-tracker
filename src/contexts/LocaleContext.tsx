import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageEnum } from '@/constants';

import '@/libs/i18n';

import { changeLocale } from '@/libs/date';

export interface LocaleContextValue {
    language: string;
    changeLanguage: (lng: LanguageEnum) => void;
}

export interface LocaleProviderProps {
    children: React.ReactNode;
}

export const LocaleContext = createContext<LocaleContextValue>(
    {} as LocaleContextValue
);

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();

    const language = useMemo(
        () => i18n.language,
        [i18n.language]
    ) as LanguageEnum;

    const changeLanguage = useCallback(
        (lng: LanguageEnum): void => {
            i18n.changeLanguage(lng);
        },
        [i18n]
    );

    useEffect(() => {
        changeLocale(language);
    }, [language]);

    const contextValue = useMemo(
        () => ({
            language,
            changeLanguage,
        }),
        [language, changeLanguage]
    );

    return (
        <LocaleContext.Provider value={contextValue}>
            {children}
        </LocaleContext.Provider>
    );
};
