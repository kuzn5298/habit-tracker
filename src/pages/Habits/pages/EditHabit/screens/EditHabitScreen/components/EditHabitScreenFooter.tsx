import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

import { useEditHabit } from '../../../hooks';

export const EditHabitScreenFooter: React.FC = () => {
    const { onSave, onRemove, form } = useEditHabit();
    const { t } = useTranslation();

    const isInvalid = Object.keys(form.formState.errors).length > 0;

    return (
        <PageDialogFooter closeButton>
            <Button onClick={onSave} disabled={isInvalid}>
                {t('SAVE')}
            </Button>
            <Button onClick={onRemove} variant="destructive">
                {t('DELETE')}
            </Button>
        </PageDialogFooter>
    );
};
