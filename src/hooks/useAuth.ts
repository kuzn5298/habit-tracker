import { use } from 'react';

import { AuthContext } from '@/contexts';
import { UserDetails } from '@/types';

interface UseAuth {
    user: UserDetails | null;
    isAuthenticated: boolean;
}

export const useAuth = (): UseAuth => {
    const { isAuthenticated, user } = use(AuthContext);

    return {
        user,
        isAuthenticated,
    };
};
