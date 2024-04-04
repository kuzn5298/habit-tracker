import { useLayoutEffect, useState } from 'react';

import { PageContextValue, SubPageValue } from '../types';

export const usePageContext = (pathname: string): PageContextValue => {
    const [subPageValue, setSubPageValue] = useState<Partial<SubPageValue>>({});

    useLayoutEffect(() => () => setSubPageValue({}), [pathname]);

    return { subPageValue, setSubPageValue };
};
