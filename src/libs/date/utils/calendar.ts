import dayjs from 'dayjs';

export const formatDayCalendar = (date: Date | string): string => {
    return dayjs(date).calendar();
};
