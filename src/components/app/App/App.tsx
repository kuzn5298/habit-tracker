import { useTranslation } from 'react-i18next';

import {
    AuthProvider,
    LocaleProvider,
    TelegramProvider,
    ThemeProvider,
    ToastProvider,
} from '@/contexts';
import APPLICATION_ROUTER from '@/libs/router';

import { Router } from '../Routes';

const App: React.FC = () => {
    const { t } = useTranslation();
    return (
        <TelegramProvider>
            <ThemeProvider>
                <ToastProvider>
                    <LocaleProvider>
                        <AuthProvider>
                            <title>{t('APP_TITLE')}</title>
                            <Router routes={APPLICATION_ROUTER} />
                        </AuthProvider>
                    </LocaleProvider>
                </ToastProvider>
            </ThemeProvider>
        </TelegramProvider>
    );
};

export default App;
