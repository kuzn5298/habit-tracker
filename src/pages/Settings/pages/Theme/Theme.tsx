import { useTranslation } from 'react-i18next';

import {
    PageDialog,
    PageDialogFooter,
    PageDialogHeader,
} from '@/components/custom';

import ThemeBody from './ThemeBody';

const Theme: React.FC = () => {
    const { t } = useTranslation('settings');

    return (
        <>
            <title>
                {t('common:APP_SUBTITLE', {
                    subtitle: t('THEME_TEXT'),
                })}
            </title>
            <PageDialog
                header={<PageDialogHeader title={t('THEME_TEXT')} />}
                body={<ThemeBody />}
                footer={<PageDialogFooter closeButton />}
            />
        </>
    );
};

export default Theme;
