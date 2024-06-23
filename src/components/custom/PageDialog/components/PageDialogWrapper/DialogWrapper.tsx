import React from 'react';

import { Dialog } from '@/components/ui';

import { DialogProvider } from '../../contexts';
import { usePageDialog } from '../../hooks';
import { DialogWrapperProps, DialogWrapperWithContextProps } from '../../types';

const DialogWrapper: React.FC<DialogWrapperProps> = ({ open, children }) => {
    const { onClose } = usePageDialog();

    const handleOpenChange = (o: boolean) => {
        if (!o) {
            onClose();
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            {children}
        </Dialog>
    );
};

const DialogWrapperWithContext: React.FC<DialogWrapperWithContextProps> = ({
    open,
    onClose,
    ...props
}) => (
    <DialogProvider open={open} onClose={onClose}>
        <DialogWrapper open={open} {...props} />
    </DialogProvider>
);

export default DialogWrapperWithContext;
