import React from 'react';

import { usePageDialog } from '../../hooks';
import { DialogHeaderProps } from '../../types';
import DesktopDialogHeader from './DesktopDialogHeader';
import MobileDialogHeader from './MobileDialogHeader';

const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
    const { isMobile } = usePageDialog();
    return React.createElement(
        isMobile ? MobileDialogHeader : DesktopDialogHeader,
        props
    );
};

export default DialogHeader;
