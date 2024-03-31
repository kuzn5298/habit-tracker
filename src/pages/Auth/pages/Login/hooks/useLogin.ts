import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    firebaseCodesMap,
    ProviderEnum,
    SIGN_IN_EMAIL_LOCAL_STORAGE,
} from '@/constants';
import { useToast } from '@/hooks';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import storage from '@/libs/storage';
import { authService } from '@/services';

type UseLoginReturn = {
    isLoading: boolean;
    isInboxDialog: boolean;
    signInWithProvider: (provider: ProviderEnum) => Promise<void>;
    sendSignInLinkToEmail: (email: string) => Promise<void>;
    closeInboxDialog: () => void;
};

export const useLogin = (): UseLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [isInboxDialog, setInboxDialog] = useState(false);
    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const closeInboxDialog = useCallback(() => {
        setInboxDialog(false);
    }, []);

    const signInWithProvider = useCallback(
        async (provider: ProviderEnum): Promise<void> => {
            try {
                setIsLoading(true);
                await authService.signInWithProvider(provider);
            } catch (e) {
                const message = getFirebaseTranslationMessage(
                    e,
                    firebaseCodesMap,
                    t
                );
                toast.error(message);
                throw e;
            } finally {
                setIsLoading(false);
            }
        },
        [t, toast]
    );

    const sendSignInLinkToEmail = useCallback(
        async (email: string): Promise<void> => {
            try {
                setIsLoading(true);
                await authService.sendSignInLinkToEmail(email);
                storage.set(SIGN_IN_EMAIL_LOCAL_STORAGE, email);
                setInboxDialog(true);
            } catch (e) {
                const message = getFirebaseTranslationMessage(
                    e,
                    firebaseCodesMap,
                    t
                );
                toast.error(message);
            } finally {
                setIsLoading(false);
            }
        },
        [t, toast]
    );

    return {
        isLoading,
        isInboxDialog,
        signInWithProvider,
        sendSignInLinkToEmail,
        closeInboxDialog,
    };
};
