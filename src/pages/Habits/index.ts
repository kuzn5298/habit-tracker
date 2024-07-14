import { lazy } from 'react';

export const AddHabit = lazy(() => import('./pages/AddHabit'));
export const Habits = lazy(() => import('./pages/Habits'));
export const EditHabit = lazy(() => import('./pages/EditHabit'));
