import { use } from 'react';

import { ToastContext } from '@/contexts';

export const useToast = () => use(ToastContext);
