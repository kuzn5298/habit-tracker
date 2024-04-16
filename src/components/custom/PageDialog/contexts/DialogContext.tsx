import { createContext, useMemo } from 'react';

import { useBreakpoint } from '@/hooks';

export interface DialogContextValue {
    isMobile: boolean;
    open: boolean;
    onClose: () => void;
}

export interface DialogProviderProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export const DialogContext = createContext<DialogContextValue>(
    {} as DialogContextValue
);

export const DialogProvider: React.FC<DialogProviderProps> = ({
    children,
    open,
    onClose,
}) => {
    const isMobile = useBreakpoint('sm');

    const contextValue = useMemo(
        () => ({ isMobile, open, onClose }),
        [isMobile, open, onClose]
    );

    return (
        <DialogContext.Provider value={contextValue}>
            {children}
        </DialogContext.Provider>
    );
};
