import { createContext, useMemo } from 'react';

import { useBreakpoint } from '@/hooks';

export interface DialogContextValue {
    isMobile: boolean;
    onClose: () => void;
}

export interface DialogProviderProps {
    children: React.ReactNode;
    onClose: () => void;
}

export const DialogContext = createContext<DialogContextValue>(
    {} as DialogContextValue
);

export const DialogProvider: React.FC<DialogProviderProps> = ({
    children,
    onClose,
}) => {
    const isMobile = useBreakpoint('sm');

    const contextValue = useMemo(
        () => ({ isMobile, onClose }),
        [isMobile, onClose]
    );

    return (
        <DialogContext.Provider value={contextValue}>
            {children}
        </DialogContext.Provider>
    );
};
