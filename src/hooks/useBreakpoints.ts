import { breakpoints } from '@/constants';

import { useMedia } from './useMedia';

type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = (breakpoint: Breakpoint) => {
    const b = breakpoints[breakpoint];
    return useMedia(`(max-width: ${b})`);
};
