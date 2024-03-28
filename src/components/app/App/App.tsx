import { Suspense } from 'react';

import { AuthProvider, LanguageProvider, ThemeProvider } from '@/contexts';
import APPLICATION_ROUTER from '@/libs/router';
import { Router } from '@/pages';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Suspense fallback="...global loading">
                <LanguageProvider>
                    <AuthProvider>
                        <Router routes={APPLICATION_ROUTER} />
                    </AuthProvider>
                </LanguageProvider>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
