import { useTranslation } from 'react-i18next';

import { PageDialogHeader } from '@/components/custom';

export const AddHabitScreenHeader: React.FC = () => {
    const { t } = useTranslation('habits');
    return <PageDialogHeader title={t('ADD_HABIT')} />;
};
