import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components';
import { ThemeProvider } from '@contexts';

import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
