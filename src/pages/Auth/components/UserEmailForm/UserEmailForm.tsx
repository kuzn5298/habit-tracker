import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from '@/components/ui';

import { SpinnerButton } from '../SpinnerButton';
import { EmailFormValues } from './type';
import { sendEmailResolver } from './UserEmailForm.resolver';

interface UserEmailFormProps
    extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    isLoading?: boolean;
    action?: (values: EmailFormValues) => Promise<void> | void;
}

export const UserEmailForm = ({
    isLoading,
    action,
    ...props
}: UserEmailFormProps) => {
    const { t } = useTranslation(['auth', 'inputs']);

    const form = useForm<EmailFormValues>({
        defaultValues: { email: '' },
        resolver: sendEmailResolver,
    });

    const isInvalid = Object.keys(form.formState.errors).length > 0;

    const onSubmit = useCallback(
        async (data: EmailFormValues) => {
            await action?.(data);
            form.reset();
        },
        [action, form]
    );

    const tMessage = useCallback(
        (key: string) => t(key, { ns: 'inputs' }),
        [t]
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate {...props}>
                <div className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem className="-mt-2">
                                    <FormLabel className="sr-only">
                                        {t('inputs:EMAIL_LABEL')}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t(
                                                'inputs:EMAIL_PLACEHOLDER'
                                            )}
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage t={tMessage} />
                                </FormItem>
                            );
                        }}
                    />
                    <SpinnerButton isLoading={isLoading} disabled={isInvalid}>
                        {t('SIGN_IN_WITH_EMAIL')}
                    </SpinnerButton>
                </div>
            </form>
        </Form>
    );
};
