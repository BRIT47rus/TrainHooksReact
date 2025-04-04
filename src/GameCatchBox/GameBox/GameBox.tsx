import { useCallback, useEffect, useRef, useState } from 'react';
import { useElementSize, useTimeout } from '../../CastomHooks';
import { generateBoxes } from './generateBoxes';
import { BoxItem, Square } from '../BoxItem/BoxItem';

export const GameBox = () => {
    const [squares, setSquares] = useState<Square[]>([]);
    const areaRef = useRef();
    const areaSize = useElementSize(areaRef);

    useEffect(() => {
        if (areaSize.height > 0 && areaSize.width > 0) {
            setSquares(generateBoxes(10, areaSize));
        }
    }, [areaSize]);

    const timeOut = useCallback(() => {
        const hitted = squares.filter((s) => s.wasHit).length;
        alert(`Вы наклацали ${hitted} квадрота`);
    }, [squares]);

    const { isRunning, start, stop } = useTimeout(timeOut, 5000);

    const hitHandle = useCallback((handleId: number) => {
        setSquares((array) =>
            array.map((square) => {
                if (square.id !== handleId) {
                    return square;
                }
                return {
                    ...square,
                    wasHit: true,
                };
            })
        );
    }, []);

    const play = () => {
        setSquares(generateBoxes(12, areaSize));
        start();
    };
    const handleStop = () => {
        stop();
    };

    return (
        <div ref={areaRef} style={{ width: '100%', height: '100%' }}>
            <h1>Game</h1>
            {isRunning ? (
                <p>У тебя 5 секунд поймать</p>
            ) : (
                <button onClick={play}>Играть</button>
            )}

            {isRunning && squares.map((s) => <BoxItem key={s.id} {...s} />)}
        </div>
    );
};
