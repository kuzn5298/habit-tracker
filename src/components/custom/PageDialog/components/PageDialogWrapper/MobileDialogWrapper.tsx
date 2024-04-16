import { usePageDialog } from '@/components/custom';
import { Drawer } from '@/components/ui';

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
            {children}
        </Drawer>
    );
};

export default MobileDialogWrapper;
