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

// email
export const isSignInWithEmailLink = (): boolean =>
    firebaseIsSignInWithEmailLink(auth, window.location.href);

export const sendSignInLinkToEmail = (email: string): Promise<void> =>
    firebaseSendSignInLinkToEmail(auth, email, actionCodeConfig);

export const signInByEmailLink = async (
    email: string
): Promise<FirebaseUser> => {
    const { user } = await firebaseSignInWithEmailLink(
        auth,
        email,
        window.location.href
    );
    return user;
};

// providers
const signInWithGoogle = async (): Promise<FirebaseUser> => {
    const { user } = await firebaseSignInWithPopup(auth, googleProvider);
    return user;
};

const signInWithGithub = async (): Promise<FirebaseUser> => {
    const { user } = await firebaseSignInWithPopup(auth, githubProvider);
    return user;
};

// general
export const signInWithProvider = async (
    provider: ProviderEnum
): Promise<FirebaseUser> => {
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
    callback: (user: FirebaseUser | null) => void | Promise<void>
): Unsubscribe | null => {
    const unsubscribe = firebaseOnAuthStateChanged(
        auth,
        async (user: FirebaseUser | null): Promise<void> => {
            await callback(user);
        }
    );
    return unsubscribe;
};

export const signOut = async (): Promise<void> => {
    await firebaseSignOut(auth);
};
