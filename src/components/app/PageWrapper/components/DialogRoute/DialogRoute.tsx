import { Dialog, DialogContent } from '@/components/ui';

export interface DialogRouteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
}

export const DialogRoute: React.FC<DialogRouteProps> = ({
    open,
    onOpenChange,
    children,
}) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90%] overflow-y-auto">
            {children}
        </DialogContent>
    </Dialog>
);
