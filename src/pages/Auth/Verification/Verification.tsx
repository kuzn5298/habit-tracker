import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui';

import { useVerification } from './hook';

const Verification: React.FC = () => {
    const { t } = useTranslation('auth');
    const { goToLogin } = useVerification();

    return (
        <div className="flex size-full items-center justify-center">
            <Button onClick={goToLogin}>{t('GO_LOGIN_PAGE')}</Button>
        </div>
    );
};

export default Verification;
