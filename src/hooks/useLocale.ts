import { use } from 'react';

import { LocaleContext } from '@/contexts';

export const useLocale = () => use(LocaleContext);
