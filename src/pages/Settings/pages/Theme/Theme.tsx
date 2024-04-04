import { useLayoutEffect } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

import { PageContextValue } from '@/components/app';
import { AVAILABLE_THEMES, THEMES_MAP } from '@/constants';
import { useTheme } from '@/hooks';

import { SettingsButton } from '../../components';

const Theme: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const { setSubPageValue } = useOutletContext<PageContextValue>();
    const { t } = useTranslation(['common', 'settings']);

    useLayoutEffect(() => {
        setSubPageValue({
            title: t('settings:THEME_TEXT'),
            closeButton: true,
        });
    }, [setSubPageValue, t]);

    return (
        <div className="flex flex-col gap-2">
            {AVAILABLE_THEMES.map((themeItem) => {
                const selected = theme === themeItem;
                return (
                    <SettingsButton
                        key={themeItem}
                        onClick={() => setTheme(themeItem)}
                        endIcon={
                            selected ? <Check size="1.25rem" /> : undefined
                        }
                        size="sm"
                    >
                        {t(THEMES_MAP[themeItem])}
                    </SettingsButton>
                );
            })}
        </div>
    );
};

export default Theme;
