import { use } from 'react';

import { DialogContext } from '../contexts';

export const usePageDialog = () => use(DialogContext);
