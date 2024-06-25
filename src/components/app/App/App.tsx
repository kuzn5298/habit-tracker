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
                <LocaleProvider>
                    <AuthProvider>
                        <Router routes={APPLICATION_ROUTER} />
                    </AuthProvider>
                </LocaleProvider>
            </ToastProvider>
        </ThemeProvider>
    );
};

export default App;
