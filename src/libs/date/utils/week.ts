import { formatDate } from './format';

export const selectWeek = (date: string): string[] => {
    const dateArr: Date[] = Array(7).fill(new Date(date));
    const weekDateArr = dateArr.map(
        (el, i) => new Date(el.setDate(el.getDate() - el.getDay() + i))
    );
    return weekDateArr.map((weekDate) => formatDate(weekDate, 'YYYY-MM-DD'));
};
