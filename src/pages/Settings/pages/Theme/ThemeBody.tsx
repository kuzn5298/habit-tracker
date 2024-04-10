import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageDialogBody } from '@/components/custom';
import { AVAILABLE_THEMES, THEMES_MAP } from '@/constants';
import { useTheme } from '@/hooks';

import { SettingsButton } from '../../components';

const ThemeBody: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation(['common', 'settings']);

    return (
        <PageDialogBody>
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
        </PageDialogBody>
    );
};

export default ThemeBody;
