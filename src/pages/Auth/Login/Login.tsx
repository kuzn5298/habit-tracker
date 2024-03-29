import { useTranslation } from 'react-i18next';

import { UserAuthForm } from './components/UserAuthForm';

const Login: React.FC = () => {
    const { t } = useTranslation('auth');
    return (
        <div className="container flex h-full items-center justify-center">
            <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-3xl font-bold">{t('SIGN_IN_TEXT')}</h1>
                    <p className="text-balance text-sm text-muted-foreground sm:text-base">
                        {t('SIGN_IN_DESCRIPTION')}
                    </p>
                </div>
                <UserAuthForm />
            </div>
        </div>
    );
};

export default Login;
