import React, { createContext, useMemo } from 'react';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';
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
                        toast: 'toast group group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                        description: 'group-[.toast]:text-muted-foreground',
                        actionButton:
                            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                        cancelButton:
                            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
                        closeButton:
                            'group-[.toast]:left-auto group-[.toast]:right-0 group-[.toast]:top-0 group-[.toast]:transform-none group-[.toast]:hover:bg-transparent group-[.toast]:border-0',
                        error: 'group-[.toaster]:bg-destructive  group-[.toaster]:border-destructive group-[.toaster]:!text-destructive-foreground',
                        warning:
                            'group-[.toaster]:bg-warning  group-[.toaster]:border-warning group-[.toaster]:text-warning-foreground',
                        info: 'group-[.toaster]:bg-info  group-[.toaster]:border-info group-[.toaster]:text-info-foreground',
                        success:
                            'group-[.toaster]:bg-success  group-[.toaster]:border-success group-[.toaster]:text-success-foreground',
                    },
                }}
                icons={{
                    success: <CircleCheck size="1.25rem" />,
                    error: <CircleX size="1.25rem" />,
                    info: <Info size="1.25rem" />,
                    warning: <CircleAlert size="1.25rem" />,
                }}
            />
        </ToastContext.Provider>
    );
};
