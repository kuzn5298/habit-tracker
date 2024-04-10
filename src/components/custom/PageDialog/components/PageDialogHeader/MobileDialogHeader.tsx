import { DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui';

import { DialogHeaderProps } from '../../types';

const MobileDialogHeader: React.FC<DialogHeaderProps> = ({
    title,
    description,
}) => {
    return (
        <DrawerHeader>
            {title && <DrawerTitle className="text-2xl">{title}</DrawerTitle>}
            {description && (
                <DrawerDescription>{description}</DrawerDescription>
            )}
        </DrawerHeader>
    );
};

export default MobileDialogHeader;
