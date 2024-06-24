import { AlertCircle } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui';

interface ErrorsControlledProps {
    className?: string;
}

export const ErrorsControlled = ({ ...props }: ErrorsControlledProps) => {
    const { t } = useTranslation('common');
    const {
        formState: { errors },
    } = useFormContext();

    const isValid = !Object.keys(errors).length;

    if (isValid) {
        return null;
    }

    return (
        <Alert variant="destructive" {...props}>
            <AlertCircle className="size-4" />
            <AlertTitle>{t('VALIDATION_ERROR')}</AlertTitle>
            <AlertDescription>
                {Object.entries(errors).map(([key, error]) => (
                    <p key={key}>{String(error?.message)}</p>
                ))}
            </AlertDescription>
        </Alert>
    );
};
