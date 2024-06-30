import { lazy } from 'react';

export const AddHabit = lazy(() => import('./pages/AddHabit'));
export const HabitsList = lazy(() => import('./pages/HabitsList'));
export const EditHabit = lazy(() => import('./pages/EditHabit'));
