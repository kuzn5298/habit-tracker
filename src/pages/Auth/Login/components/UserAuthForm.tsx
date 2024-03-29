import React from 'react';
import { useTranslation } from 'react-i18next';

import { SpinnerIcon } from '@/components/icons';
import { Button, Input, Label } from '@/components/ui';
import { cn } from '@/utils/ui';

import { PROVIDERS_LIST } from '../../Auth.helpers';
import { useLogin } from '../hooks';
import { SocialButton } from './SocialButton';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
    const { t } = useTranslation(['auth', 'inputs']);
    const { isLoading, signInWithProvider, sendSignInLinkToEmail } = useLogin();

    const onEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        if (email) {
            sendSignInLinkToEmail(email);
        }
    };

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={onEmailLogin}>
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            {t('inputs:EMAIL_LABEL')}
                        </Label>
                        <Input
                            id="email"
                            placeholder={t('inputs:EMAIL_PLACEHOLDER')}
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <SpinnerIcon className="mr-2 size-4 animate-spin" />
                        )}
                        {t('SIGN_IN_WITH_EMAIL')}
                    </Button>
                </div>
            </form>
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
                    <SocialButton
                        key={id}
                        icon={icon}
                        onClick={() => signInWithProvider(id)}
                        isLoading={isLoading}
                    >
                        {t('CONTINUE_WITH')} {name}
                    </SocialButton>
                ))}
            </div>
        </div>
    );
};
