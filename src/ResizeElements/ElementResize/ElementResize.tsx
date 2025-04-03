import { useRef } from 'react';
import { styles } from '../styles';
import { useElementSize } from '../../CastomHooks';

export const ElementResize = () => {
    const ref = useRef<HTMLDivElement>(null); // Инициализируем useRef с null и указываем тип HTMLElement

    const size = useElementSize(ref);

    return (
        <div ref={ref} style={styles.row__item}>
            {`${size.width} X ${size.height}`}
        </div>
    );
};
