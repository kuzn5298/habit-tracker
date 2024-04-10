import { Suspense } from 'react';

import { usePageDialog, ViewLoading } from '@/components/custom';
import { Dialog, DialogContent } from '@/components/ui';

import { DialogWrapperProps } from '../../types';

const DesktopDialogWrapper: React.FC<DialogWrapperProps> = ({
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
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-h-[90%] overflow-y-auto">
                <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                    {children}
                </Suspense>
            </DialogContent>
        </Dialog>
    );
};

export default DesktopDialogWrapper;
