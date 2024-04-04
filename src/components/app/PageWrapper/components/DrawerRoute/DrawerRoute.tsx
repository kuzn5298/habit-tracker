import { useTranslation } from 'react-i18next';

import {
    Button,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui';

import { SubPageValue } from '../../types';

export interface DrawerRouteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
    subPageValue: SubPageValue;
}

export const DrawerRoute: React.FC<DrawerRouteProps> = ({
    open,
    onOpenChange,
    children,
    subPageValue,
}) => {
    const { title, description, closeButton } = subPageValue;
    const { t } = useTranslation();
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[90%] overflow-y-auto outline-none">
                {(title || description) && (
                    <DrawerHeader>
                        {title && (
                            <DrawerTitle className="text-2xl">
                                {title}
                            </DrawerTitle>
                        )}
                        {description && (
                            <DrawerDescription>{description}</DrawerDescription>
                        )}
                    </DrawerHeader>
                )}
                <div className="px-4">{children}</div>
                {closeButton && (
                    <DrawerFooter>
                        {closeButton && (
                            <DrawerClose asChild>
                                <Button variant="outline">{t('CLOSE')}</Button>
                            </DrawerClose>
                        )}
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    );
};
