import React from 'react';

import { DialogProvider } from '../../contexts';
import { usePageDialog } from '../../hooks';
import { DialogWrapperProps, DialogWrapperWithContextProps } from '../../types';
import DesktopDialogWrapper from './DesktopDialogWrapper';
import MobileDialogWrapper from './MobileDialogWrapper';

const DialogWrapper: React.FC<DialogWrapperProps> = (props) => {
    const { isMobile } = usePageDialog();
    return React.createElement(
        isMobile ? MobileDialogWrapper : DesktopDialogWrapper,
        props
    );
};

const DialogWrapperWithContext: React.FC<DialogWrapperWithContextProps> = ({
    onClose,
    ...props
}) => (
    <DialogProvider onClose={onClose}>
        <DialogWrapper {...props} />
    </DialogProvider>
);

export default DialogWrapperWithContext;
