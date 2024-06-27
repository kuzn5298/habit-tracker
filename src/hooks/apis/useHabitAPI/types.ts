import { Habit } from '@/types';

import { APIResponse } from '../helpers';

interface GetHabitsSuccessResponse extends APIResponse {
    success: true;
    data: Habit[];
}

interface CreateHabitSuccessResponse extends APIResponse {
    success: true;
    data: Habit;
}

interface HabitErrorResponse extends APIResponse {
    success: false;
    data: null;
}

export type GetHabitsAPIResponse =
    | GetHabitsSuccessResponse
    | HabitErrorResponse;

export type CreateHabitAPIResponse =
    | CreateHabitSuccessResponse
    | HabitErrorResponse;
