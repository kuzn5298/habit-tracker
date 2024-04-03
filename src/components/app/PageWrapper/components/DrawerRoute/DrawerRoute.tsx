import { Drawer, DrawerContent } from '@/components/ui';

export interface DrawerRouteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
}

export const DrawerRoute: React.FC<DrawerRouteProps> = ({
    open,
    onOpenChange,
    children,
}) => (
    <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="h-[90%] overflow-y-auto outline-none">
            {children}
        </DrawerContent>
    </Drawer>
);
