import { useTranslation } from 'react-i18next';

import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui';
import { LanguageEnum, ThemeEnum } from '@/constants';
import { useLanguage, useTheme } from '@/hooks';

const App: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const { changeLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex items-center justify-between p-4">
                <div className="text-primary-text text-3xl font-bold">
                    Habit Tracker ({t('TEST')})
                </div>
                <Select
                    value={theme}
                    onValueChange={(e: ThemeEnum) => setTheme(e)}
                >
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={ThemeEnum.LIGHT}>Light</SelectItem>
                        <SelectItem value={ThemeEnum.DARK}>Dark</SelectItem>
                        <SelectItem value={ThemeEnum.SYSTEM}>System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-center gap-4">
                <Button onClick={() => changeLanguage(LanguageEnum.RUSSIAN)}>
                    🇷🇺 Russian
                </Button>
                <Button onClick={() => changeLanguage(LanguageEnum.ENGLISH)}>
                    🇬🇧 English
                </Button>
            </div>
        </div>
    );
};

export default App;
