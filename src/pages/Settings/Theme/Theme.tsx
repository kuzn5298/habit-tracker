import { Link } from 'react-router-dom';

import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui';
import { AppRouteEnum, ThemeEnum } from '@/constants';
import { useTheme } from '@/hooks';

const Theme: React.FC = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Theme
            </h2>
            <div className="mb-6">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS}>Settings</Link>
                </Button>
            </div>
            <div className="px-6">
                <Select
                    value={theme}
                    onValueChange={(e: ThemeEnum) => setTheme(e)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={ThemeEnum.LIGHT}>Light</SelectItem>
                        <SelectItem value={ThemeEnum.DARK}>Dark</SelectItem>
                        <SelectItem value={ThemeEnum.SYSTEM}>System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Theme;
