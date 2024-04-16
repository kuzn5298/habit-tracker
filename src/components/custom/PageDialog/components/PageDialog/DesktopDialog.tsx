import { Suspense } from 'react';

import { ViewLoading } from '@/components/custom';
import { DialogContent } from '@/components/ui';
import { cn } from '@/utils';

import { DialogProps } from '../../types';

const DesktopDialog: React.FC<DialogProps> = ({
    header,
    body,
    footer,
    className,
}) => {
    return (
        <DialogContent className={cn('max-h-[90%]', className)}>
            <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                {header}
                {body}
                {footer}
            </Suspense>
        </DialogContent>
    );
};

export default DesktopDialog;
