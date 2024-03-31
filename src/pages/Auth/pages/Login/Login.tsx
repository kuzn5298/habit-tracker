import { useTranslation } from 'react-i18next';

import { SpinnerButton, UserEmailForm } from '../../components';
import { PROVIDERS_LIST } from '../../constants';
import { CheckInboxDialog } from './components';
import { useLogin } from './hooks';

const Login: React.FC = () => {
    const {
        isLoading,
        isInboxDialog,
        signInWithProvider,
        sendSignInLinkToEmail,
        closeInboxDialog,
    } = useLogin();

    const { t } = useTranslation('auth');

    return (
        <>
            <div className="container flex h-full items-center justify-center">
                <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-3xl font-bold">
                            {t('SIGN_IN_TEXT')}
                        </h1>
                        <p className="text-balance text-sm text-muted-foreground sm:text-base">
                            {t('SIGN_IN_DESCRIPTION')}
                        </p>
                    </div>
                    <UserEmailForm
                        isLoading={isLoading}
                        action={({ email }) => sendSignInLinkToEmail(email)}
                    />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                {t('OR_CONTINUE_WITH')}
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {PROVIDERS_LIST.map(({ id, name, icon }) => (
                            <SpinnerButton
                                key={id}
                                startIcon={icon}
                                variant="outline"
                                isLoading={isLoading}
                                onClick={() => signInWithProvider(id)}
                            >
                                {t('CONTINUE_WITH')} {name}
                            </SpinnerButton>
                        ))}
                    </div>
                </div>
            </div>
            {isInboxDialog && <CheckInboxDialog onClose={closeInboxDialog} />}
        </>
    );
};

export default Login;
