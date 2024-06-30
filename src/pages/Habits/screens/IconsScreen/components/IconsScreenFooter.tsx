import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

interface IconsScreenFooterProps {
    onBack?: () => void;
}

export const IconsScreenFooter: React.FC<IconsScreenFooterProps> = ({
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
