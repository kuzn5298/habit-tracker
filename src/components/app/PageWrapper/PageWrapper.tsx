import React, { Suspense, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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
                <Suspense fallback={<div>dialog loading...</div>}>
                    <Outlet />
                </Suspense>
            )}
            <Suspense fallback={<div>element loading...</div>}>
                {element}
            </Suspense>
        </>
    );
};

export default PageWrapper;
