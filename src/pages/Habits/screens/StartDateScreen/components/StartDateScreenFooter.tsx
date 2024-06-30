import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

interface StartDateScreenFooterProps {
    onBack?: () => void;
}

export const StartDateScreenFooter: React.FC<StartDateScreenFooterProps> = ({
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
