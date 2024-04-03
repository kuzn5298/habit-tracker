import React, { createContext, useEffect, useMemo, useState } from 'react';
import { User as FirebaseUser } from 'firebase/auth';

import { ViewLoading } from '@/components';
import { authService } from '@/services';

export interface AuthContextValue {
    isAuthenticated: boolean;
    user: FirebaseUser | null;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
    {} as AuthContextValue
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<FirebaseUser | null>(null);

    useEffect(() => {
        const authStateCallback = async (
            userInformation: FirebaseUser | null
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
