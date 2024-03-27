import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/components';
import { LanguageProvider, ThemeProvider } from '@/contexts';

import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <Suspense fallback="...global loading">
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>
);
