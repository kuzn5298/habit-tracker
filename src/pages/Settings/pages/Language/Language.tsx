import { useTranslation } from 'react-i18next';

import {
    PageDialog,
    PageDialogFooter,
    PageDialogHeader,
} from '@/components/custom';

import LanguageBody from './LanguageBody';

const Language: React.FC = () => {
    const { t } = useTranslation('settings');

    return (
        <>
            <title>
                {t('common:APP_SUBTITLE', {
                    subtitle: t('LANGUAGE_TEXT'),
                })}
            </title>
            <PageDialog
                header={<PageDialogHeader title={t('LANGUAGE_TEXT')} />}
                body={<LanguageBody />}
                footer={<PageDialogFooter closeButton />}
            />
        </>
    );
};

export default Language;
