import { useEffect, useRef } from 'react';

export const useMaunted = () => {
    const loadingRef = useRef(true);

    useEffect(() => {
        const changeBoolean = () => {
            loadingRef.current = false;
        };

        return changeBoolean;
    }, []);

    return loadingRef;
};
