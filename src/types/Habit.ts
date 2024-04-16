import { COLORS_MAP, ICONS_MAP, WeekDayEnum } from '@/constants';

export type HabitColorType = keyof typeof COLORS_MAP;
export type HabitIconType = keyof typeof ICONS_MAP;

type HabitDetails = {
    id: string;
    name: string;
    description?: string;
    color?: HabitColorType;
    icon?: HabitIconType;
    startDate: string;
};

export enum HabitRepeatTypeEnum {
    DAILY = 'DAILY',
    MONTHLY = 'MONTHLY',
}

type DailyRepeat = {
    repeatType: HabitRepeatTypeEnum.DAILY;
    repeatList: WeekDayEnum[];
};

type MonthlyRepeat = {
    repeatType: HabitRepeatTypeEnum.MONTHLY;
    repeatList: number[];
};

type RepeatPayload = DailyRepeat | MonthlyRepeat;

export type Habit = HabitDetails & RepeatPayload;

export type HabitWithoutId = Omit<Habit, 'id'>;
