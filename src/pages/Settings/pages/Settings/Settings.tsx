import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@/components/app';
import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';
import { authService } from '@/services';

import { SettingsButton, SwitchButton } from '../../components';

const Settings: React.FC = () => {
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
                <SettingsButton
                    endIcon={<ChevronRight />}
                    onClick={() => navigate(AppRouteEnum.SETTINGS_THEME)}
                >
                    {t('THEME_TEXT')}
                </SettingsButton>
                <SwitchButton>{t('NOTIFICATION_TEXT')}</SwitchButton>
                <SwitchButton>{t('ANIMATION_TEXT')}</SwitchButton>
                <SettingsButton
                    endIcon={<ChevronRight />}
                    onClick={() => navigate(AppRouteEnum.SETTINGS_LANGUAGE)}
                >
                    {t('LANGUAGE_TEXT')}
                </SettingsButton>
                <SettingsButton onClick={onLogout}>
                    {t('LOGOUT_TEXT')}
                </SettingsButton>
            </div>
        </PageContainer>
    );
};

export default Settings;
