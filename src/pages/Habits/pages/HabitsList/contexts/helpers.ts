import { Habit, HabitRepeatTypeEnum } from '@/types';

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
