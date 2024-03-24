import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_NAME } from '@constants';

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: DEFAULT_LANGUAGE,
        load: 'languageOnly',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            caches: ['localStorage'],
            lookupLocalStorage: LANGUAGE_STORAGE_NAME,
            order: [
                'querystring',
                'localStorage',
                'navigator',
                'htmlTag',
                'path',
                'subdomain',
            ],
        },
    });

export default i18n;
