import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
    AppRouteEnum,
    firebaseCodesMap,
    SIGN_IN_EMAIL_LOCAL_STORAGE,
} from '@/constants';
import { useSuspense, useToast } from '@/hooks';
import { getFirebaseTranslationMessage } from '@/libs/firebase';
import storage from '@/libs/storage';
import { authService } from '@/services';

export const useVerification = () => {
    const navigate = useNavigate();
    const wrapSuspense = useSuspense();
    const { toast } = useToast();
    const { t } = useTranslation('errors');

    const goToLogin = useCallback(
        () => navigate(AppRouteEnum.LOGIN),
        [navigate]
    );

    const signInByEmail = useCallback(
        async (email: string): Promise<void> => {
            try {
                await wrapSuspense(authService.signInByEmailLink(email));
                storage.remove(SIGN_IN_EMAIL_LOCAL_STORAGE);
            } catch (e) {
                const message = getFirebaseTranslationMessage(
                    e,
                    firebaseCodesMap,
                    t
                );
                toast.error(message);
            }
        },
        [t, toast, wrapSuspense]
    );

    useEffect(() => {
        const login = async () => {
            if (authService.isSignInWithEmailLink()) {
                let email = storage.get(SIGN_IN_EMAIL_LOCAL_STORAGE) as
                    | string
                    | null;

                if (!email) {
                    // User opened the link on a different device. To prevent session fixation
                    // attacks, ask the user to provide the associated email again. For example:
                    // TODO: Rework support new email when verification
                    // eslint-disable-next-line no-alert
                    email = prompt(
                        'Please provide your email for confirmation'
                    );
                }

                if (email) {
                    await signInByEmail(email);
                }
            }
            goToLogin();
        };

        login();
    }, [goToLogin, signInByEmail]);
};
