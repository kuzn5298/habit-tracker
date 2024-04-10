import {
    isSignInWithEmailLink as firebaseIsSignInWithEmailLink,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    sendSignInLinkToEmail as firebaseSendSignInLinkToEmail,
    signInWithEmailLink as firebaseSignInWithEmailLink,
    signInWithPopup as firebaseSignInWithPopup,
    signOut as firebaseSignOut,
    User as FirebaseUser,
    Unsubscribe,
} from 'firebase/auth';

import { ProviderEnum } from '@/constants';
import {
    actionCodeConfig,
    auth,
    githubProvider,
    googleProvider,
} from '@/libs/firebase';
import { UserDetails } from '@/types';

import { getUserDetails } from './userService';

// email
export const isSignInWithEmailLink = (): boolean =>
    firebaseIsSignInWithEmailLink(auth, window.location.href);

export const sendSignInLinkToEmail = (email: string): Promise<void> =>
    firebaseSendSignInLinkToEmail(auth, email, actionCodeConfig);

export const signInByEmailLink = async (
    email: string
): Promise<UserDetails> => {
    const { user } = await firebaseSignInWithEmailLink(
        auth,
        email,
        window.location.href
    );
    return getUserDetails(user);
};

// providers
const signInWithGoogle = async (): Promise<UserDetails> => {
    const { user } = await firebaseSignInWithPopup(auth, googleProvider);
    return getUserDetails(user);
};

const signInWithGithub = async (): Promise<UserDetails> => {
    const { user } = await firebaseSignInWithPopup(auth, githubProvider);
    return getUserDetails(user);
};

// general
export const signInWithProvider = async (
    provider: ProviderEnum
): Promise<UserDetails> => {
    switch (provider) {
        case ProviderEnum.GOOGLE:
            return signInWithGoogle();
        case ProviderEnum.GITHUB:
            return signInWithGithub();
        default:
            throw Error('This provider is not registered');
    }
};

// subscription
export const authStateChangeSubscription = (
    callback: (user: UserDetails | null) => void | Promise<void>
): Unsubscribe | null => {
    const unsubscribe = firebaseOnAuthStateChanged(
        auth,
        async (user: FirebaseUser | null): Promise<void> => {
            const userDetails = user && getUserDetails(user);
            await callback(userDetails);
        }
    );
    return unsubscribe;
};

export const signOut = async (): Promise<void> => {
    await firebaseSignOut(auth);
};
