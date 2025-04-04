import { useEffect, useRef } from 'react';

export const useMaunted = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        // Функция очистки (вызывается при размонтировании)
        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};
