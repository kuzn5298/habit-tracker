import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRouteEnum, SIGN_IN_EMAIL_LOCAL_STORAGE } from '@/constants';
import { useAuthAPI } from '@/hooks/apis';
import storage from '@/libs/storage';
import { authService } from '@/services';

type UseVerificationReturn = {
    isLoading: boolean;
};

export const useVerification = (): UseVerificationReturn => {
    const navigate = useNavigate();
    const { isLoading, signInByEmail: signInByEmailAPI } = useAuthAPI();

    const goToLogin = useCallback(
        () => navigate(AppRouteEnum.LOGIN),
        [navigate]
    );

    const signInByEmail = useCallback(
        async (email: string): Promise<void> => {
            const { success } = await signInByEmailAPI(email);
            if (success) {
                storage.remove(SIGN_IN_EMAIL_LOCAL_STORAGE);
            }
        },
        [signInByEmailAPI]
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

    return { isLoading };
};
