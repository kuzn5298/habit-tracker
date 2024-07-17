import { use } from 'react';

import { TelegramContext } from '@/contexts';

export const useTelegramApp = () => use(TelegramContext);
