import { formatDate } from '@/libs/date';
import { Habit, HabitRepeatTypeEnum, HabitsCompletedByDate } from '@/types';

export const filterHabitsByDate = (habits: Habit[], date: string) => {
    const d = new Date(date);
    const weekDay = d.getDay();
    return habits.filter((habit) => {
        const isCorrectDate = new Date(habit.startDate) <= d;
        let isCorrectRepeatDay = false;
        if (habit.repeatType === HabitRepeatTypeEnum.DAILY) {
            isCorrectRepeatDay = habit.repeatList.includes(weekDay);
        }
        return isCorrectDate && isCorrectRepeatDay;
    });
};

export const sortHabitsByName = (habits: Habit[]): Habit[] => {
    return habits.sort((a, b) => a.name.localeCompare(b.name));
};

export const combineHabitsComplete = (
    habits: Habit[],
    completedMap: HabitsCompletedByDate,
    date: string
): Habit[] => {
    const [year, month, day] = date.split('-');
    const dayCompleted = completedMap?.[year]?.[month]?.[day] ?? {};
    return habits.map((habit) => {
        const completed = Boolean(dayCompleted[habit.id]?.completed);
        return {
            ...habit,
            completed,
        };
    });
};

export const getMonthDate = (date: string) => formatDate(date, 'YYYY-MM');
