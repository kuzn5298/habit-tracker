import { lazy } from 'react';

export const Login = lazy(() => import('./pages/Login'));
export const TelegramLogin = lazy(() => import('./pages/TelegramLogin'));
export const Verification = lazy(() => import('./pages/Verification'));

// TODO: Add Terms of Service and Privacy Policy.
