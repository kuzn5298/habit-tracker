import { useTranslation } from 'react-i18next';

import { PageDialogHeader } from '@/components/custom';

export const RepeatScreenHeader: React.FC = () => {
    const { t } = useTranslation('habits');
    return <PageDialogHeader title={t('HABIT_REPEAT')} />;
};
