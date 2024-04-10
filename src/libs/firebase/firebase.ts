import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './firebase.config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// providers
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const githubProvider = new GithubAuthProvider();
