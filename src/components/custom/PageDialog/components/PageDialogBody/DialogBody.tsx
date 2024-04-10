import React from 'react';

import { usePageDialog } from '../../hooks';
import { DialogBodyProps } from '../../types';
import DesktopDialog from './DesktopDialogBody';
import MobileDialog from './MobileDialogBody';

const DialogBody: React.FC<DialogBodyProps> = (props) => {
    const { isMobile } = usePageDialog();
    return React.createElement(isMobile ? MobileDialog : DesktopDialog, props);
};

export default DialogBody;
