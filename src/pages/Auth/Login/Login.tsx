import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';
import { AppRouteEnum } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

const Login: React.FC = () => {
    const { onLogin } = useAuth();
    return (
        <div>
            <h2 className="scroll-m-20 border-b px-6 py-2 text-3xl font-semibold tracking-tight first:mt-0">
                Login
            </h2>
            <div className="mb-6 flex gap-4">
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.MAIN}>Habits</Link>
                </Button>
                <Button variant="link" asChild>
                    <Link to={AppRouteEnum.VERIFICATION}>Verification</Link>
                </Button>
            </div>
            <div>
                <Button onClick={onLogin}>Login</Button>
            </div>
        </div>
    );
};

export default Login;
