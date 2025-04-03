import { useCallback, useEffect, useRef, useState } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
    const elementRef = useRef(callback);
    const [intervalID, setIntervalID] = useState<number | null | undefined>(
        null
    );
    const [target, setTarget] = useState<any>();

    useEffect(() => {
        elementRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const intervalEffect = setInterval(() => {
            if (elementRef.current) {
                elementRef.current();
            }
        }, delay);
        setIntervalID(intervalEffect);
        return () => {
            clearInterval(intervalEffect);
        };
    }, [target, delay]);

    const isRunning = !!intervalID;
    const restart = useCallback(() => {
        setTarget({});
    }, []);
    const stop = useCallback(() => {
        if (intervalID) {
            clearInterval(intervalID);
            setIntervalID(null);
        }
    }, [intervalID]);

    return { isRunning, stop, restart };
};
