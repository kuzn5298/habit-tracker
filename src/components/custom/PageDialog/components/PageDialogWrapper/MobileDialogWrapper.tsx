import { Suspense } from 'react';

import { usePageDialog, ViewLoading } from '@/components/custom';
import { Drawer, DrawerContent } from '@/components/ui';

import { DialogWrapperProps } from '../../types';

const MobileDialogWrapper: React.FC<DialogWrapperProps> = ({
    open,
    children,
}) => {
    const { onClose } = usePageDialog();

    const handleOpenChange = (o: boolean) => {
        if (!o) {
            onClose();
        }
    };

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerContent className="h-[90%] overflow-y-auto outline-none">
                <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                    {children}
                </Suspense>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileDialogWrapper;
