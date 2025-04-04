import { v4 } from 'uuid';
import { SizeType } from '../../CastomHooks/useElementSize/useElementSize';
const SQUARE_SIZE = Math.random() * 300;
export const generateBoxes = (count: number, areaSize: SizeType) => {
    const squares = [];
    for (let i = 0; i < count; i++) {
        squares.push({
            top: Math.random() * (areaSize.height - SQUARE_SIZE),
            left: Math.random() * (areaSize.width - SQUARE_SIZE),
            size: SQUARE_SIZE,
            id: v4(),
            wasHit: false,
        });
    }
    return squares;
};
