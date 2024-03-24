import { LanguageEnum, ThemeEnum } from '@constants';
import { useLanguage, useTheme } from '@hooks';
import { getOppositeTheme } from '@utils';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const { changeLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex items-center justify-between p-4">
                <div className="text-3xl font-bold text-primary-text">
                    Habit Tracker ({t('TEST')})
                </div>
                <button
                    className="border p-2"
                    type="button"
                    onClick={() => setTheme(getOppositeTheme(theme))}
                >
                    {theme === ThemeEnum.LIGHT ? 'Dark' : 'Light'}
                </button>
            </div>
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => changeLanguage(LanguageEnum.RUSSIAN)}
                    className="border p-2"
                    type="button"
                >
                    ru
                </button>
                <button
                    onClick={() => changeLanguage(LanguageEnum.ENGLISH)}
                    className="border p-2"
                    type="button"
                >
                    en
                </button>
            </div>
        </div>
    );
};

export default App;
