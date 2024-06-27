import { useEffect, useRef } from 'react';

import { authService } from '@/services';
import { useHabitStore } from '@/store';
import { UserDetails } from '@/types';

export const useLogoutClean = () => {
    const logged = useRef(false);

    const { resetStore } = useHabitStore();

    const clean = useRef({ resetStore });

    useEffect(() => {
        const authStateCallback = async (user: UserDetails | null) => {
            const isAuthenticated = !!user;
            if (isAuthenticated) {
                logged.current = true;
            } else if (logged.current) {
                logged.current = false;
                // logout

                clean.current.resetStore?.();
            }
        };

        const unsubscribe =
            authService.authStateChangeSubscription(authStateCallback);

        return () => {
            unsubscribe?.();
        };
    }, []);
};
