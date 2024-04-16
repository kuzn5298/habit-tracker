import { usePageDialog } from '@/components/custom';
import { Dialog } from '@/components/ui';

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
            {children}
        </Dialog>
    );
};

export default DesktopDialogWrapper;
