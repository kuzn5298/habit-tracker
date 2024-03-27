import { createContext, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageEnum } from '@/constants';
import { useSuspense } from '@/hooks';

import '@/libs/i18n';

export interface ILanguageContext {
    language: string;
    changeLanguage: (lng: LanguageEnum) => void;
}

export interface ILanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageContext = createContext<ILanguageContext>(
    {} as ILanguageContext
);

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({
    children,
}) => {
    const { i18n } = useTranslation();
    const wrapper = useSuspense();

    const language = useMemo(() => i18n.language, [i18n.language]);

    const changeLanguage = useCallback(
        (lng: LanguageEnum): void => {
            wrapper(i18n.changeLanguage(lng));
        },
        [i18n, wrapper]
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
