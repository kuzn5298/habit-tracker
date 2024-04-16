import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';

import { LanguageEnum } from '@/constants';

const locales = {
    [LanguageEnum.RUSSIAN]: () => import(`dayjs/locale/ru`),
    [LanguageEnum.ENGLISH]: () => import(`dayjs/locale/en`),
};

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(updateLocale);

const updateCalendarLocale = (locale: LanguageEnum) => {
    if (locale === LanguageEnum.ENGLISH) {
        dayjs.updateLocale(LanguageEnum.ENGLISH, {
            calendar: {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: '[Yesterday]',
                lastWeek: 'DD MMM YYYY',
                sameElse: 'DD MMM YYYY',
            },
        });
    } else if (locale === LanguageEnum.RUSSIAN) {
        dayjs.updateLocale(LanguageEnum.RUSSIAN, {
            calendar: {
                sameDay: '[Сегодня]',
                nextDay: '[Завтра]',
                nextWeek: 'dddd',
                lastDay: '[Вчера]',
                lastWeek: 'DD MMM YYYY',
                sameElse: 'DD MMM YYYY',
            },
        });
    }
};

export const changeLocale = async (locale: LanguageEnum): Promise<void> => {
    await locales[locale]();
    updateCalendarLocale(locale);
    dayjs.locale(locale);
};
