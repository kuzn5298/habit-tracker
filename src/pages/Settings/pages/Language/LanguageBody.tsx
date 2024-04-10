import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageDialogBody } from '@/components/custom';
import { AVAILABLE_LANGUAGES, LANGUAGES_MAP } from '@/constants';
import { useLanguage } from '@/hooks';

import { SettingsButton } from '../../components';

const LanguageBody: React.FC = () => {
    const { language, changeLanguage } = useLanguage();
    const { t } = useTranslation(['common', 'settings']);

    return (
        <PageDialogBody>
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
        </PageDialogBody>
    );
};

export default LanguageBody;
