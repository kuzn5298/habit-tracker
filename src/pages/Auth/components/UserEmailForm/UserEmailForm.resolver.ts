import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import i18n from '@/libs/i18n';

import { EmailFormValues } from './type';

const { t } = i18n;

const sendEmailSchema: yup.ObjectSchema<EmailFormValues> = yup.object().shape({
    email: yup
        .string()
        .email(t('inputs:EMAIL_INVALID'))
        .required(t('inputs:EMAIL_REQUIRED')),
});

export const sendEmailResolver = yupResolver(sendEmailSchema);
