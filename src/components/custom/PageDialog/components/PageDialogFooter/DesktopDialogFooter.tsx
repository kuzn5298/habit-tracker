import { useTranslation } from 'react-i18next';

import { Button, DialogClose, DialogFooter } from '@/components/ui';

import { DialogFooterProps } from '../../types';

const DesktopDialogFooter: React.FC<DialogFooterProps> = ({
    children,
    closeButton,
}) => {
    const { t } = useTranslation();

    return (
        <DialogFooter>
            {children}
            {closeButton && (
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        {t('CLOSE')}
                    </Button>
                </DialogClose>
            )}
        </DialogFooter>
    );
};

export default DesktopDialogFooter;
