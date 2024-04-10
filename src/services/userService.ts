import { User as FirebaseUser } from 'firebase/auth';

import { auth } from '@/libs/firebase';
import { UserDetails } from '@/types';

export const parseUserDetails = (user: FirebaseUser): UserDetails => {
    const {
        uid,
        email = null,
        photoURL = null,
        displayName = null,
    } = user ?? {};

    return {
        uid,
        email,
        photoURL,
        username: displayName ?? email,
    };
};

export const getUserDetails = (user: FirebaseUser): UserDetails => {
    return parseUserDetails(user);
};

export const getAuthUserId = (): string | null => {
    return auth.currentUser?.uid ?? null;
};
