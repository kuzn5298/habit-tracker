import { useCallback, useState } from 'react';

import { ProviderEnum, SIGN_IN_EMAIL_LOCAL_STORAGE } from '@/constants';
import { getFirebaseCodeError } from '@/libs/firebase';
import storage from '@/libs/storage';
import { authService } from '@/services';

type UseLoginReturn = {
    isLoading: boolean;
    signInWithProvider: (provider: ProviderEnum) => Promise<void>;
    sendSignInLinkToEmail: (email: string) => Promise<void>;
};

export const useLogin = (): UseLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);

    const signInWithProvider = useCallback(
        async (provider: ProviderEnum): Promise<void> => {
            try {
                setIsLoading(true);
                await authService.signInWithProvider(provider);
            } catch (e) {
                const code = getFirebaseCodeError(e);
                // eslint-disable-next-line no-console
                console.error('signInByProvider:', code);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    const sendSignInLinkToEmail = useCallback(
        async (email: string): Promise<void> => {
            try {
                setIsLoading(true);
                await authService.sendSignInLinkToEmail(email);
                storage.set(SIGN_IN_EMAIL_LOCAL_STORAGE, email);
            } catch (e) {
                const code = getFirebaseCodeError(e);
                // eslint-disable-next-line no-console
                console.error('sendSignInLinkToEmail:', code);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    return {
        isLoading,
        signInWithProvider,
        sendSignInLinkToEmail,
    };
};
