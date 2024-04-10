import { PageDialogFooter, usePageDialog } from '@/components/custom';
import { Button } from '@/components/ui';

export const AddHabitScreenFooter: React.FC = () => {
    const { onClose } = usePageDialog();

    return (
        <PageDialogFooter closeButton>
            <Button onClick={onClose}>Save</Button>
        </PageDialogFooter>
    );
};
