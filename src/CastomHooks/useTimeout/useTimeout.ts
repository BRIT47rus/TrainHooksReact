import { useCallback, useEffect, useRef, useState } from 'react';

export const useTimeout = (callback: () => void, timeout: number) => {
    const callbackRef = useRef();
    const [timeoutID, setTimeoutID] = useState<number | null>(null);
    const [trigger, setTrigger] = useState({});

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const timeStart = setTimeout(() => {
            setTimeoutID(null);
            if (callbackRef.current) {
                callbackRef.current();
            }
        }, timeout);

        setTimeoutID(timeStart);
        return () => {
            clearTimeout(timeStart);
        };
    }, [trigger, timeout]);

    const isRunning = !!timeoutID;

    const start = useCallback(() => {
        setTrigger({});
    }, []);

    const stop = useCallback(() => {
        if (timeoutID) {
            clearTimeout(timeoutID);
            setTimeoutID(null);
        }
    }, [timeoutID]);

    return {};
};
