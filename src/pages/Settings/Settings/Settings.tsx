import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';

const Settings: React.FC = () => {
    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Settings
            </h2>
            <div className="flex gap-4">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.HABITS}>Habits</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS_THEME}>Theme</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS_LANGUAGE}>Language</Link>
                </Button>
            </div>
        </div>
    );
};

export default Settings;
