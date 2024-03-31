import { Suspense } from 'react';

import {
    AuthProvider,
    LanguageProvider,
    ThemeProvider,
    ToastProvider,
} from '@/contexts';
import APPLICATION_ROUTER from '@/libs/router';
import { Router } from '@/pages';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ToastProvider>
                <Suspense fallback="...global loading">
                    <LanguageProvider>
                        <AuthProvider>
                            <Router routes={APPLICATION_ROUTER} />
                        </AuthProvider>
                    </LanguageProvider>
                </Suspense>
            </ToastProvider>
        </ThemeProvider>
    );
};

export default App;
