import { useTranslation } from 'react-i18next';

import { PageDialogHeader } from '@/components/custom';

export const StartDateScreenHeader: React.FC = () => {
    const { t } = useTranslation('habits');
    return <PageDialogHeader title={t('HABIT_START_DATE')} />;
};
