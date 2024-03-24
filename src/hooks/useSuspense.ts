import { useCallback, useRef, useState } from 'react';

export const useSuspense = () => {
    const promise = useRef<Promise<unknown>>();
    const [loading, setLoading] = useState(false);

    const wrapPromise = useCallback(
        async <T = unknown>(callback: Promise<T>) => {
            promise.current = callback;
            try {
                setLoading(true);
                const result = await callback;
                return result;
            } finally {
                promise.current = undefined;
                setLoading(false);
            }
        },
        []
    );

    if (loading || loading) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw promise.current;
    }

    return wrapPromise;
};
