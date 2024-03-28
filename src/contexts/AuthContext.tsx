import React, { createContext, useCallback, useMemo, useState } from 'react';

export interface IAuthContext {
    isAuthenticated: boolean;
    user: object | null;
    onLogin: () => void;
    onLogout: () => void;
}

export interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<object | null>(null);

    const onLogin = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setUser({});
            setLoading(false);
        }, 1000);
    }, []);

    const onLogout = useCallback(() => {
        setUser(null);
    }, []);

    const contextValue = useMemo(
        () => ({
            isAuthenticated: !!user,
            user,
            onLogin,
            onLogout,
        }),
        [user, onLogin, onLogout]
    );

    if (loading) {
        return <div>loading login</div>;
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
