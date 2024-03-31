import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { EmailFormValues } from './type';

const sendEmailSchema: yup.ObjectSchema<EmailFormValues> = yup.object().shape({
    email: yup.string().email('EMAIL_INVALID').required('EMAIL_REQUIRED'),
});

export const sendEmailResolver = yupResolver(sendEmailSchema);
