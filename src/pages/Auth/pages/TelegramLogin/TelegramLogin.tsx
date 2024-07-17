import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ViewLoading } from '@/components/custom';
import { AppRouteEnum, TELEGRAM_BOT_TOKEN } from '@/constants';
import { useAuthAPI, useTelegramApp, useToast } from '@/hooks';

import { verifyTelegramAuth } from './helpers';

const TelegramLogin = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('auth');
    const { toast } = useToast();
    const { signInAnonymously } = useAuthAPI();
    const { isTelegramApp, tgData } = useTelegramApp();
    const isCalled = useRef(false);

    const goToLogin = useCallback(
        () => navigate(AppRouteEnum.LOGIN),
        [navigate]
    );

    useEffect(() => {
        const authenticateUser = async () => {
            isCalled.current = true;

            if (
                isTelegramApp &&
                (await verifyTelegramAuth(tgData, TELEGRAM_BOT_TOKEN))
            ) {
                // FIXME: Change on sign in custom token
                // temporary solution
                const { success } = await signInAnonymously();
                if (success) {
                    toast.success(t('AUTH_TELEGRAM_SUCCESS'));
                }
            } else {
                toast.error(t('AUTH_TELEGRAM_FAILED'));
            }
            goToLogin();
        };

        if (!isCalled.current) {
            authenticateUser();
        }
    }, [isTelegramApp, tgData, signInAnonymously, goToLogin, toast, t]);

    return <ViewLoading />;
};

export default TelegramLogin;
