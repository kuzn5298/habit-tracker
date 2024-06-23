import React, { useCallback } from 'react';

import { DialogContent } from '@/components/ui';
import { cn } from '@/utils';

import { DialogProps } from '../../types';

const Dialog: React.FC<DialogProps> = ({ header, body, footer, className }) => {
    const onInteractOutside = useCallback((e: Event) => {
        e.preventDefault();
    }, []);

    return (
        <DialogContent
            onInteractOutside={onInteractOutside}
            className={cn('max-h-[90%]', className)}
        >
            {header}
            {body}
            {footer}
        </DialogContent>
    );
};

export default Dialog;
