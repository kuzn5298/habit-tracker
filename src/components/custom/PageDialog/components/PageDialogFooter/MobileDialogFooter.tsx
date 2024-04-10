import { useTranslation } from 'react-i18next';

import { Button, DrawerClose, DrawerFooter } from '@/components/ui';

import { DialogFooterProps } from '../../types';

const MobileDialog: React.FC<DialogFooterProps> = ({
    children,
    closeButton,
}) => {
    const { t } = useTranslation();

    return (
        <DrawerFooter>
            {children}
            {closeButton && (
                <DrawerClose asChild>
                    <Button variant="outline">{t('CLOSE')}</Button>
                </DrawerClose>
            )}
        </DrawerFooter>
    );
};

export default MobileDialog;
