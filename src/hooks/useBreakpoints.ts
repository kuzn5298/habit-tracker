import { useMemo } from 'react';

import { breakpoints } from '@/constants';

import { useMedia } from './useMedia';

type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = (breakpoint: Breakpoint) => {
    const b = useMemo(() => breakpoints[breakpoint], [breakpoint]);
    return useMedia(`(max-width: ${b})`);
};
