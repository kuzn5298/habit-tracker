import { useTranslation } from 'react-i18next';

import { PageDialogHeader } from '@/components/custom';

export const EditHabitScreenHeader: React.FC = () => {
    const { t } = useTranslation('habits');
    return <PageDialogHeader title={t('EDIT_HABIT')} />;
};
