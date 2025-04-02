import { useCallback, useEffect, useState } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
type WindowSize = [number, number];
const INITIAL_SIZE: WindowSize = [0, 0];
export const useWindowSize = () => {
    const [size, setSize] = useState<WindowSize>(INITIAL_SIZE);
    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        setSize([innerWidth, innerHeight]);
    }, []);
    useEventListener(
        'resize',
        useCallback((event: UIEvent) => {
            const target = event.target as Window;
            const { innerWidth, innerHeight } = target;
            setSize([innerWidth, innerHeight]);
        }, [])
    );

    return size;
};
