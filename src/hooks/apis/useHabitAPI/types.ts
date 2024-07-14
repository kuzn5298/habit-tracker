import { Habit, HabitsCompletedByDate } from '@/types';

import { APIResponse } from '../helpers';

interface GetHabitsSuccessResponse extends APIResponse {
    success: true;
    data: Habit[];
}

interface GetHabitsCompletedMapSuccessResponse extends APIResponse {
    success: true;
    data: HabitsCompletedByDate;
}

interface CreateHabitSuccessResponse extends APIResponse {
    success: true;
    data: Habit;
}

interface CompleteHabitSuccessResponse extends APIResponse {
    success: true;
    data: boolean;
}

interface HabitErrorResponse extends APIResponse {
    success: false;
    data: null;
}

export type GetHabitsAPIResponse =
    | GetHabitsSuccessResponse
    | HabitErrorResponse;

export type GetHabitsCompletedMapAPIResponse =
    | GetHabitsCompletedMapSuccessResponse
    | HabitErrorResponse;

export type CreateHabitAPIResponse =
    | CreateHabitSuccessResponse
    | HabitErrorResponse;

export type CompleteHabitAPIResponse =
    | CompleteHabitSuccessResponse
    | HabitErrorResponse;
