export interface DialogWrapperProps {
    open: boolean;
    children: React.ReactNode;
}

export interface DialogWrapperWithContextProps extends DialogWrapperProps {
    onClose: () => void;
}

export interface DialogProps {
    header?: React.ReactElement;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    className?: string;
}

export interface DialogHeaderProps {
    title?: string;
    description?: string;
}

export interface DialogBodyProps {
    children?: React.ReactNode;
}

export interface DialogFooterProps {
    children?: React.ReactNode;
    closeButton?: boolean;
}
