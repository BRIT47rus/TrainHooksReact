import { CSSProperties, memo } from 'react';
export interface Square {
    id: string | number;
    size: number;
    top: number;
    left: number;
    wasHit: boolean;
    hitHandle: any;
}
export const BoxItem = memo(
    ({ left, top, wasHit, size, hitHandle, id }: Square) => {
        const styles: CSSProperties = {
            position: 'absolute',
            background: wasHit ? 'red' : 'blue',
            top,
            left,
            width: size,
            height: size,
        };
        const mouseEnter = () => {
            hitHandle(id);
        };

        return <div style={styles} onMouseEnter={mouseEnter}></div>;
    }
);
