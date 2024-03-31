import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui';
import { Button } from '@/components/ui/button';
import { SIGN_IN_EMAIL_LOCAL_STORAGE } from '@/constants';
import storage from '@/libs/storage';

interface CheckInboxDialogProps {
    open?: boolean;
    onClose?: () => void;
}

export const CheckInboxDialog: React.FC<CheckInboxDialogProps> = ({
    open,
    onClose,
}) => {
    const email = useMemo(() => storage.get(SIGN_IN_EMAIL_LOCAL_STORAGE), []);
    const { t } = useTranslation(['auth', 'common']);
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t('CHECK_INBOX')}</DialogTitle>
                    <DialogDescription>
                        {t('CLICK_LINK_ON_EMAIL', { email })}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="button" onClick={onClose}>
                        {t('common:OK')}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
