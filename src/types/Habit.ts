import { COLORS_MAP, ICONS_MAP, WeekDayEnum } from '@/constants';

export type HabitColorType = keyof typeof COLORS_MAP;
export type HabitIconType = keyof typeof ICONS_MAP;

type HabitDetails = {
    id: string;
    name: string;
    description?: string;
    color?: HabitColorType;
    icon?: HabitIconType;
    startDate?: number;
};

export enum HabitRepeatTypeEnum {
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
}

type WeeklyRepeat = {
    repeatType: HabitRepeatTypeEnum.WEEKLY;
    repeatList: WeekDayEnum[];
};

type MonthlyRepeat = {
    repeatType: HabitRepeatTypeEnum.MONTHLY;
    repeatList: number[];
};

type RepeatPayload = WeeklyRepeat | MonthlyRepeat;

export type Habit = HabitDetails & RepeatPayload;

export type HabitWithoutId = Omit<Habit, 'id'>;
