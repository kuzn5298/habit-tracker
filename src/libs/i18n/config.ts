import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_NAME } from '@/constants';

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: DEFAULT_LANGUAGE,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['common', 'error', 'auth'],
        defaultNS: 'common',
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
            convertDetectedLanguage: (lng) => lng.split('-')[0],
        },
    });

export default i18n;
