import React, { Suspense, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ViewLoading } from '@/components';
import { AppRouteEnum } from '@/constants';
import { useBreakpoint } from '@/hooks';

import { DialogRoute, DrawerRoute } from './components';

export interface PageWrapperProps {
    element: React.ReactNode;
    path: AppRouteEnum;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ element, path }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const pagePath = path === pathname;
    const isMobile = useBreakpoint('sm');

    const closeDialog = useCallback(
        (open: boolean) => {
            if (!open) {
                navigate(path);
            }
        },
        [navigate, path]
    );

    return (
        <>
            {React.createElement(
                isMobile ? DrawerRoute : DialogRoute,
                {
                    open: !pagePath,
                    onOpenChange: closeDialog,
                },
                <Suspense fallback={<ViewLoading className="min-h-[300px]" />}>
                    <Outlet />
                </Suspense>
            )}
            <Suspense fallback={<ViewLoading />}>{element}</Suspense>
        </>
    );
};

export default PageWrapper;
