import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { PageButton } from '@/components/custom';
import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';
import { authService } from '@/services';

import { SwitchButton } from '../../components';

const Page: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('settings');

    const onLogout = useCallback(() => {
        authService.signOut();
    }, []);

    return (
        <PageContainer className="max-w-screen-md">
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 p-0"
                    onClick={() => navigate(AppRouteEnum.MAIN)}
                >
                    <ChevronLeft />
                    <span className="sr-only">{t('common:BACK')}</span>
                </Button>
                <span className="truncate text-2xl font-semibold sm:text-3xl">
                    {t('SETTINGS_TEXT')}
                </span>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <PageButton
                    endIcon={<ChevronRight />}
                    onClick={() => navigate(AppRouteEnum.SETTINGS_THEME)}
                >
                    {t('THEME_TEXT')}
                </PageButton>
                <SwitchButton>{t('NOTIFICATION_TEXT')}</SwitchButton>
                <SwitchButton>{t('ANIMATION_TEXT')}</SwitchButton>
                <PageButton
                    endIcon={<ChevronRight />}
                    onClick={() => navigate(AppRouteEnum.SETTINGS_LANGUAGE)}
                >
                    {t('LANGUAGE_TEXT')}
                </PageButton>
                <PageButton onClick={onLogout}>{t('LOGOUT_TEXT')}</PageButton>
            </div>
        </PageContainer>
    );
};

export default Page;
