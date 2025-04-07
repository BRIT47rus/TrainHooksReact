import { RefObject, useRef } from 'react';
import { useHovered } from '../../CastomHooks';

export const ItemEmoji = () => {
    const ref = useRef<RefObject<HTMLSpanElement> | null>(null);

    const isHoverElement = useHovered(ref);

    console.log('render');

    return (
        <>
            <span
                style={{
                    fontSize: 50,
                }}
                ref={ref}
            >
                {isHoverElement ? '\u{1F602}' : '\u{1F642}'}
            </span>
        </>
    );
};
