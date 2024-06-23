import React from 'react';

import {
    DialogDescription,
    DialogTitle,
    DialogHeader as UIDialogHeader,
} from '@/components/ui';
import { cn } from '@/utils';

import { DialogHeaderProps } from '../../types';

const DialogHeader: React.FC<DialogHeaderProps> = ({ title, description }) => {
    return (
        <UIDialogHeader>
            <DialogTitle className={cn('text-2xl', !title && 'hidden')}>
                {title}
            </DialogTitle>
            <DialogDescription className={cn(!description && 'hidden')}>
                {description}
            </DialogDescription>
        </UIDialogHeader>
    );
};

export default DialogHeader;
