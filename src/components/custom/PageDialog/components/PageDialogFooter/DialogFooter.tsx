import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Button,
    DialogClose,
    DialogFooter as UIDialogFooter,
} from '@/components/ui';

import { DialogFooterProps } from '../../types';

const DialogFooter: React.FC<DialogFooterProps> = ({
    children,
    closeButton,
}) => {
    const { t } = useTranslation();

    return (
        <UIDialogFooter>
            {children}
            {closeButton && (
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        {t('CLOSE')}
                    </Button>
                </DialogClose>
            )}
        </UIDialogFooter>
    );
};

export default DialogFooter;
