import { useCallback, useState } from 'react';

import { ProviderEnum, SIGN_IN_EMAIL_LOCAL_STORAGE } from '@/constants';
import { useAuthAPI } from '@/hooks/apis';
import storage from '@/libs/storage';

type UseLoginReturn = {
    isLoading: boolean;
    isInboxDialog: boolean;
    signInWithProvider: (provider: ProviderEnum) => Promise<void>;
    sendSignInLinkToEmail: (email: string) => Promise<void>;
    closeInboxDialog: () => void;
};

export const useLogin = (): UseLoginReturn => {
    const {
        isLoading,
        sendSignInLinkToEmail: sendSignInLinkToEmailAPI,
        signInWithProvider: signInWithProviderAPI,
    } = useAuthAPI();
    const [isInboxDialog, setInboxDialog] = useState(false);

    const closeInboxDialog = useCallback(() => {
        setInboxDialog(false);
    }, []);

    const signInWithProvider = useCallback(
        async (provider: ProviderEnum): Promise<void> => {
            await signInWithProviderAPI(provider);
        },
        [signInWithProviderAPI]
    );

    const sendSignInLinkToEmail = useCallback(
        async (email: string): Promise<void> => {
            const { success } = await sendSignInLinkToEmailAPI(email);
            if (success) {
                storage.set(SIGN_IN_EMAIL_LOCAL_STORAGE, email);
                setInboxDialog(true);
            }
        },
        [sendSignInLinkToEmailAPI]
    );

    return {
        isLoading,
        isInboxDialog,
        signInWithProvider,
        sendSignInLinkToEmail,
        closeInboxDialog,
    };
};
