import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';
import { authService } from '@/services';

const Habits: React.FC = () => {
    const onLogout = () => {
        authService.signOut();
    };

    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Habits
            </h2>
            <div className="mb-6 flex gap-4">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.ADD_HABIT}>Add Habits</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.SETTINGS}>Settings</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.NOT_FOUND}>Error</Link>
                </Button>
            </div>
            <div>
                <Button onClick={onLogout}>Logout</Button>
            </div>
        </div>
    );
};

export default Habits;
