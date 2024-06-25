import React, { Suspense, useCallback } from 'react';

import { ViewLoading } from '@/components/custom';
import { DialogContent, DialogDescription, DialogTitle } from '@/components/ui';
import { cn } from '@/utils';

import { DialogProps } from '../../types';

const Dialog: React.FC<DialogProps> = ({
    header,
    body,
    footer,
    loading,
    className,
}) => {
    const onInteractOutside = useCallback((e: Event) => {
        e.preventDefault();
    }, []);

    return (
        <DialogContent
            onInteractOutside={onInteractOutside}
            className={cn('max-h-[90%] overflow-auto', className)}
        >
            <DialogTitle className="hidden" />
            <DialogDescription className="hidden" />
            <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                {header}
                {body}
                {footer}
            </Suspense>
            {loading && <ViewLoading className="absolute inset-0" />}
        </DialogContent>
    );
};

export default Dialog;
