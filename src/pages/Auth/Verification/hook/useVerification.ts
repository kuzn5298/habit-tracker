import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRouteEnum, SIGN_IN_EMAIL_LOCAL_STORAGE } from '@/constants';
import { useSuspense } from '@/hooks';
import { getFirebaseCodeError } from '@/libs/firebase';
import storage from '@/libs/storage';
import { authService } from '@/services';

interface UserVerificationReturn {
    goToLogin: () => void;
}

export const useVerification = (): UserVerificationReturn => {
    const navigate = useNavigate();
    const wrapSuspense = useSuspense();

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
                const code = getFirebaseCodeError(e);
                // eslint-disable-next-line no-console
                console.error('signInByEmail:', code);
            }
        },
        [wrapSuspense]
    );

    useEffect(() => {
        if (authService.isSignInWithEmailLink()) {
            let email = storage.get(SIGN_IN_EMAIL_LOCAL_STORAGE) as
                | string
                | null;

            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                // TODO: Rework support new email when verification
                // eslint-disable-next-line no-alert
                email = prompt('Please provide your email for confirmation');
            }

            if (email) {
                signInByEmail(email);
            }
        } else {
            // goToLogin();
        }
    }, [goToLogin, signInByEmail]);

    return { goToLogin };
};
