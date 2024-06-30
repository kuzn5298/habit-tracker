import { AppRouteEnum } from '@/constants';

export const getEditHabit = (id: string) =>
    AppRouteEnum.EDIT_HABIT.replace(':habitId', id);
