import { WEEK_DAYS } from '@/constants';
import { getDateFormat } from '@/libs/date';
import { HabitRepeatTypeEnum, HabitWithoutId } from '@/types';

export const INIT_FORM_VALUES: HabitWithoutId = {
    name: '',
    description: '',
    startDate: getDateFormat(),
    repeatType: HabitRepeatTypeEnum.DAILY,
    repeatList: [...WEEK_DAYS],
};
