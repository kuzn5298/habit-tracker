import { FirebaseError } from 'firebase/app';
import { TFunction } from 'i18next';

import { MapObject } from '@/types';

export const getFirebaseCodeByError = (e: unknown): string | null => {
    const name = (e as FirebaseError)?.name;
    if (name === 'FirebaseError') {
        const code = (e as FirebaseError)?.code;
        return code;
    }
    return null;
};

export const getFirebaseMessageByError = (e: unknown): string | null => {
    const name = (e as FirebaseError)?.name;
    if (name === 'FirebaseError') {
        const message = (e as FirebaseError)?.message;
        return message;
    }
    return null;
};

export const getFirebaseTranslationMessage = (
    e: unknown,
    map: MapObject<string, string | undefined>,
    t: TFunction
): string | null => {
    const code = getFirebaseCodeByError(e);
    const message = getFirebaseMessageByError(e);
    const translationKey = code && (map[code] ?? null);
    const translationMessage =
        translationKey && t(translationKey, { ns: 'errors' });
    return translationMessage === translationKey ? message : translationMessage;
};
