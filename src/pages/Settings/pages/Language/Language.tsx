import { useTranslation } from 'react-i18next';

import {
    PageDialog,
    PageDialogFooter,
    PageDialogHeader,
} from '@/components/custom';

import LanguageBody from './LanguageBody';

const Language: React.FC = () => {
    const { t } = useTranslation(['common', 'settings']);

    return (
        <PageDialog
            header={<PageDialogHeader title={t('settings:LANGUAGE_TEXT')} />}
            body={<LanguageBody />}
            footer={<PageDialogFooter closeButton />}
        />
    );
};

export default Language;
