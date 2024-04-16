import dayjs from 'dayjs';

import { WeekDayEnum } from '@/constants';

export const getDayText = (day: WeekDayEnum): string | null => {
    return dayjs.weekdays()?.[day] ?? null;
};

export const getDayMinText = (day: WeekDayEnum): string | null => {
    return dayjs.weekdaysMin()?.[day] ?? null;
};
