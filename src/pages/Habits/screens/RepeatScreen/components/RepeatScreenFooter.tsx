import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

interface RepeatScreenFooterProps {
    onBack?: () => void;
}

export const RepeatScreenFooter: React.FC<RepeatScreenFooterProps> = ({
    onBack,
}) => {
    const { t } = useTranslation();
    return (
        <PageDialogFooter>
            <Button variant="secondary" onClick={onBack}>
                {t('BACK')}
            </Button>
        </PageDialogFooter>
    );
};
