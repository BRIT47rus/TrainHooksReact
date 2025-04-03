import { RefObject, useCallback, useEffect, useState } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';

type SizeType = {
    width: number;
    height: number;
};

const INIT_SIZE = {
    width: 0,
    height: 0,
};

export const useElementSize = (itemRef: RefObject<HTMLElement | null>) => {
    const [size, setSize] = useState<SizeType>(INIT_SIZE);

    const unpdateSizeElement = useCallback(() => {
        const elemtenRef = itemRef.current;
        if (elemtenRef) {
            const { width, height } = elemtenRef.getBoundingClientRect();
            setSize({ width, height });
        }
    }, [itemRef]);

    useEffect(() => {
        unpdateSizeElement();
    }, [unpdateSizeElement]);
    useEventListener('resize', unpdateSizeElement);

    return size;
};
