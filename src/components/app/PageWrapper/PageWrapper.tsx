import React, { Suspense, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { PageDialogWrapper, ViewLoading } from '@/components/custom';
import { AppRouteEnum } from '@/constants';

export interface PageWrapperProps {
    element: React.ReactNode;
    path: AppRouteEnum;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ element, path }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const pagePath = path === pathname;

    const closeDialog = useCallback(() => {
        navigate(path);
    }, [navigate, path]);

    return (
        <>
            <PageDialogWrapper open={!pagePath} onClose={closeDialog}>
                <Outlet />
            </PageDialogWrapper>
            <Suspense fallback={<ViewLoading />}>{element}</Suspense>
        </>
    );
};

export default PageWrapper;
