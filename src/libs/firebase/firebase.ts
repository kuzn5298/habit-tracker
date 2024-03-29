import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { firebaseConfig } from './firebase.config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// services
export const auth = getAuth(app);

// providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
