import { Suspense } from 'react';

import { ViewLoading } from '@/components/custom';
import {
    AuthProvider,
    LocaleProvider,
    ThemeProvider,
    ToastProvider,
} from '@/contexts';
import APPLICATION_ROUTER from '@/libs/router';

import { Router } from '../Routes';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ToastProvider>
                <Suspense fallback={<ViewLoading />}>
                    <LocaleProvider>
                        <AuthProvider>
                            <Router routes={APPLICATION_ROUTER} />
                        </AuthProvider>
                    </LocaleProvider>
                </Suspense>
            </ToastProvider>
        </ThemeProvider>
    );
};

export default App;
