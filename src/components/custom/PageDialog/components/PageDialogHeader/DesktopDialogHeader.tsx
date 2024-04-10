import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui';

import { DialogHeaderProps } from '../../types';

const DesktopDialogHeader: React.FC<DialogHeaderProps> = ({
    title,
    description,
}) => {
    return (
        <DialogHeader>
            {title && <DialogTitle className="text-2xl">{title}</DialogTitle>}
            {description && (
                <DialogDescription>{description}</DialogDescription>
            )}
        </DialogHeader>
    );
};

export default DesktopDialogHeader;
