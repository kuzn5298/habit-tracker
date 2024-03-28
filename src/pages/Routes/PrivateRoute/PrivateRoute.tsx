import { Navigate, Outlet } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

export interface PrivateRouteProps {
    element?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to={AppRouteEnum.LOGIN} />;
    }
    return element ?? <Outlet />;
};

export default PrivateRoute;
