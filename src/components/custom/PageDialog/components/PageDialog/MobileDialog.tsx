import { Suspense } from 'react';

import { ViewLoading } from '@/components/custom';
import { DrawerContent } from '@/components/ui';
import { cn } from '@/utils';

import { DialogProps } from '../../types';

const MobileDialog: React.FC<DialogProps> = ({
    header,
    body,
    footer,
    className,
}) => {
    return (
        <DrawerContent className={cn('h-[90%]  outline-none', className)}>
            <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                {header}
                {body}
                {footer}
            </Suspense>
        </DrawerContent>
    );
};

export default MobileDialog;
