import { useTranslation } from 'react-i18next';

import {
    PageDialog,
    PageDialogFooter,
    PageDialogHeader,
} from '@/components/custom';

import ThemeBody from './ThemeBody';

const Theme: React.FC = () => {
    const { t } = useTranslation(['common', 'settings']);

    return (
        <PageDialog
            header={<PageDialogHeader title={t('settings:THEME_TEXT')} />}
            body={<ThemeBody />}
            footer={<PageDialogFooter closeButton />}
        />
    );
};

export default Theme;
