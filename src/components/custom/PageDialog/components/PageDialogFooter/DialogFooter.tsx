import React from 'react';

import { usePageDialog } from '../../hooks';
import { DialogFooterProps } from '../../types';
import DesktopDialogFooter from './DesktopDialogFooter';
import MobileDialogFooter from './MobileDialogFooter';

const DialogFooter: React.FC<DialogFooterProps> = (props) => {
    const { isMobile } = usePageDialog();
    return React.createElement(
        isMobile ? MobileDialogFooter : DesktopDialogFooter,
        props
    );
};

export default DialogFooter;
