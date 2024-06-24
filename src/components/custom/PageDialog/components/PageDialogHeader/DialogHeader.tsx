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
            {title && (
                <DialogTitle className={cn('text-2xl')}>{title}</DialogTitle>
            )}
            {description && (
                <DialogDescription>{description}</DialogDescription>
            )}
        </UIDialogHeader>
    );
};

export default DialogHeader;
