import React, { createContext, useMemo } from 'react';
import { toast } from 'sonner';

import { Toaster } from '@/components';

export interface ToastContextValue {
    toast: typeof toast;
}

export interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastContext = createContext<ToastContextValue>(
    {} as ToastContextValue
);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const contextValue = useMemo(() => ({ toast }), []);
    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <Toaster
                position="top-right"
                className="toaster group"
                toastOptions={{
                    classNames: {
                        toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                        description: 'group-[.toast]:text-muted-foreground',
                        actionButton:
                            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                        cancelButton:
                            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
                        error: 'group-[.toaster]:bg-destructive  group-[.toaster]:border-destructive group-[.toaster]:text-destructive-foreground',
                    },
                }}
            />
        </ToastContext.Provider>
    );
};
