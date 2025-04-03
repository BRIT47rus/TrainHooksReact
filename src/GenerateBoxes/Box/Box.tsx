import { styles } from '../GenerateBoxes/styles';
import '../GenerateBoxes/box.css';
import { memo } from 'react';

type BoxProps = {
    top: number;
    left: number;
    size: number;
    color: string;
    speed: number;
};
export const Box = memo(({ size, color, top, left, speed }: BoxProps) => {
    return <div style={styles.box(size, color, top, left, speed)} />;
});
