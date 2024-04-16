import dayjs from 'dayjs';

import { DATE_FORMAT } from '../constants';

export const formatDate = (
    date: Date | string | undefined,
    format: string
): string => {
    return dayjs(date).format(format);
};

export const getDateFormat = (date?: string | Date): string => {
    return formatDate(date, DATE_FORMAT);
};
