import { Link } from 'react-router-dom';

import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui';
import { AppRouteEnum, LanguageEnum } from '@/constants';
import { useLanguage } from '@/hooks';

const Language: React.FC = () => {
    const { language, changeLanguage } = useLanguage();
    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Language
            </h2>
            <div className="mb-6">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS}>Settings</Link>
                </Button>
            </div>
            <div className="px-6">
                <Select
                    value={language}
                    onValueChange={(e: LanguageEnum) => changeLanguage(e)}
                >
                    <SelectTrigger className=" w-full">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={LanguageEnum.ENGLISH}>
                            English
                        </SelectItem>
                        <SelectItem value={LanguageEnum.RUSSIAN}>
                            Russian
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Language;
