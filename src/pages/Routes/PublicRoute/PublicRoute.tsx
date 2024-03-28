import { Navigate, Outlet } from 'react-router-dom';

import { AppRouteEnum } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

export interface PublicRouteProps {
    element?: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return <Navigate to={AppRouteEnum.MAIN} />;
    }
    return element ?? <Outlet />;
};

export default PublicRoute;
