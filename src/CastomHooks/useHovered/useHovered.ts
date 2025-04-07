import { RefObject, useEffect, useState } from 'react';

export const useHovered = (itemRef: RefObject<HTMLElement>) => {
    const [isHovered, setHover] = useState(false);

    useEffect(() => {
        if (!itemRef.current) {
            return;
        }
        const node = itemRef.current;
        const handleOver = () => {
            setHover(true);
        };
        const handleOut = () => {
            setHover(false);
        };

        node.addEventListener('mouseover', handleOver);
        node.addEventListener('mouseout', handleOut);
        return () => {
            node.removeEventListener('mouseover', handleOver);
            node.removeEventListener('mouseout', handleOut);
        };
    }, [itemRef]);

    return isHovered;
};
