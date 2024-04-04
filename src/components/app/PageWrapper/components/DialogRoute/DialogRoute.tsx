import { useTranslation } from 'react-i18next';

import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui';

import { SubPageValue } from '../../types';

export interface DialogRouteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
    subPageValue: SubPageValue;
}

export const DialogRoute: React.FC<DialogRouteProps> = ({
    open,
    onOpenChange,
    children,
    subPageValue,
}) => {
    const { title, description, closeButton } = subPageValue;
    const { t } = useTranslation();
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90%] overflow-y-auto">
                {(title || description) && (
                    <DialogHeader>
                        {title && (
                            <DialogTitle className="text-2xl">
                                {title}
                            </DialogTitle>
                        )}
                        {description && (
                            <DialogDescription>{description}</DialogDescription>
                        )}
                    </DialogHeader>
                )}
                {children}
                {closeButton && (
                    <DialogFooter>
                        {closeButton && (
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    {t('CLOSE')}
                                </Button>
                            </DialogClose>
                        )}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};
