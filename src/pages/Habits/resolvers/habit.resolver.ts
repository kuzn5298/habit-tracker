import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { WeekDayEnum } from '@/constants';
import i18n from '@/libs/i18n';
import {
    HabitColorType,
    HabitIconType,
    HabitRepeatTypeEnum,
    HabitWithoutId,
} from '@/types';

const { t } = i18n;

const habitSchema: yup.ObjectSchema<HabitWithoutId> = yup.object().shape({
    name: yup.string().required(t('inputs:HABIT_NAME_REQUIRED')),
    description: yup.string().optional(),
    startDate: yup.string().required(t('inputs:HABIT_START_DATE_REQUIRED')),
    color: yup.string<HabitColorType>().optional(),
    icon: yup.string<HabitIconType>().optional(),
    repeatType: yup
        .mixed<HabitRepeatTypeEnum>()
        .oneOf(Object.values(HabitRepeatTypeEnum))
        .required(t('inputs:HABIT_REPEAT_TYPE_REQUIRED')),
    repeatList: yup
        .array()
        .of(yup.mixed<WeekDayEnum | number>().required())
        .min(1, t('inputs:HABIT_REPEAT_LIST_REQUIRED'))
        .required(t('inputs:HABIT_REPEAT_LIST_REQUIRED')),
});

export const habitResolver = yupResolver(habitSchema);
