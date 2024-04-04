import { useLayoutEffect } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

import { PageContextValue } from '@/components/app';
import { AVAILABLE_LANGUAGES, LANGUAGES_MAP } from '@/constants';
import { useLanguage } from '@/hooks';

import { SettingsButton } from '../../components';

const Language: React.FC = () => {
    const { language, changeLanguage } = useLanguage();
    const { setSubPageValue } = useOutletContext<PageContextValue>();
    const { t } = useTranslation(['common', 'settings']);

    useLayoutEffect(() => {
        setSubPageValue({
            title: t('settings:LANGUAGE_TEXT'),
            closeButton: true,
        });
    }, [setSubPageValue, t]);

    return (
        <div className="flex flex-col gap-2">
            {AVAILABLE_LANGUAGES.map((languageItem) => {
                const selected = language === languageItem;
                return (
                    <SettingsButton
                        key={languageItem}
                        onClick={() => changeLanguage(languageItem)}
                        endIcon={
                            selected ? <Check size="1.25rem" /> : undefined
                        }
                        size="sm"
                    >
                        {t(LANGUAGES_MAP[languageItem])}
                    </SettingsButton>
                );
            })}
        </div>
    );
};

export default Language;
