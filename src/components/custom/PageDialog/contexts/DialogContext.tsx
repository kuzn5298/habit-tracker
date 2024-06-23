import { createContext, useMemo } from 'react';

export interface DialogContextValue {
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
    const contextValue = useMemo(() => ({ open, onClose }), [open, onClose]);

    return (
        <DialogContext.Provider value={contextValue}>
            {children}
        </DialogContext.Provider>
    );
};
