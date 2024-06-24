import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

import { useAddHabit } from '../../../hooks';

export const AddHabitScreenFooter: React.FC = () => {
    const { onSave, form } = useAddHabit();
    const { t } = useTranslation();

    const isInvalid = Object.keys(form.formState.errors).length > 0;

    const handleSave = async () => {
        await onSave();
    };

    return (
        <PageDialogFooter closeButton>
            <Button onClick={handleSave} disabled={isInvalid}>
                {t('SAVE')}
            </Button>
        </PageDialogFooter>
    );
};
