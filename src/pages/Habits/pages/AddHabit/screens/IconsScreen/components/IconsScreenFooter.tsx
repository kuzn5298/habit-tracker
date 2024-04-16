import { useTranslation } from 'react-i18next';

import { PageDialogFooter } from '@/components/custom';
import { Button } from '@/components/ui';

import { AddHabitScreenEnum } from '../../../constants';
import { useAddHabit } from '../../../hooks';

export const IconsScreenFooter: React.FC = () => {
    const { setScreen } = useAddHabit();
    const { t } = useTranslation();
    return (
        <PageDialogFooter>
            <Button
                variant="secondary"
                onClick={() => setScreen(AddHabitScreenEnum.AddScreen)}
            >
                {t('BACK')}
            </Button>
        </PageDialogFooter>
    );
};
