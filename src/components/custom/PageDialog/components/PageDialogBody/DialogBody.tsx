import React from 'react';

import { DialogBodyProps } from '../../types';

const DialogBody: React.FC<DialogBodyProps> = ({ children }) => {
    return <div className="h-full overflow-hidden">{children}</div>;
};

export default DialogBody;
