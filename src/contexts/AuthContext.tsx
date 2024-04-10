import React, { createContext, useEffect, useMemo, useState } from 'react';

import { ViewLoading } from '@/components/custom';
import { authService } from '@/services';
import { UserDetails } from '@/types';

export interface AuthContextValue {
    isAuthenticated: boolean;
    user: UserDetails | null;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
    {} as AuthContextValue
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserDetails | null>(null);

    useEffect(() => {
        const authStateCallback = async (
            userInformation: UserDetails | null
        ) => {
            setUser(userInformation);
            setLoading(false);
        };

        const unsubscribe =
            authService.authStateChangeSubscription(authStateCallback);
        return () => {
            unsubscribe?.();
        };
    }, []);

    const contextValue = useMemo(
        () => ({
            isAuthenticated: !!user,
            user,
        }),
        [user]
    );

    if (loading) {
        return <ViewLoading />;
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
