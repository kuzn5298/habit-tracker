import React from 'react';

import { usePageDialog } from '../../hooks';
import { DialogProps } from '../../types';
import DesktopDialog from './DesktopDialog';
import MobileDialog from './MobileDialog';

const Dialog: React.FC<DialogProps> = (props) => {
    const { isMobile } = usePageDialog();
    return React.createElement(isMobile ? MobileDialog : DesktopDialog, props);
};

export default Dialog;
