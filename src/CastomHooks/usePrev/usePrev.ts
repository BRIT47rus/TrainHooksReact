import { useEffect, useRef } from 'react';

export const usePrev = (value: number) => {
    const lastValueRef = useRef(value);
    useEffect(() => {
        lastValueRef.current = value;
    }, [value]);

    return lastValueRef.current;
};
