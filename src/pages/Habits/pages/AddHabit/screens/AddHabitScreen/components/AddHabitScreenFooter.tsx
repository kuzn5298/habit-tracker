import { useTranslation } from 'react-i18next';

import { PageDialogFooter, usePageDialog } from '@/components/custom';
import { Button } from '@/components/ui';

import { useAddHabit } from '../../../hooks';

export const AddHabitScreenFooter: React.FC = () => {
    const { onClose } = usePageDialog();
    const { onSave } = useAddHabit();
    const { t } = useTranslation();

    const handleSave = async () => {
        await onSave();
        onClose();
    };

    return (
        <PageDialogFooter closeButton>
            <Button onClick={handleSave}> {t('SAVE')}</Button>
        </PageDialogFooter>
    );
};
