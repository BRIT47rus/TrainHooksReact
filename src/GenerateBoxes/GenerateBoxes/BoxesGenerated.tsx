import { useCallback, useRef, useState } from 'react';
import { Box } from '../Box/Box';
import './box.css';
import { useElementSize, useInterval } from '../../CastomHooks';
import { v4 } from 'uuid';
import { generateColor } from './generateColor';

const MIN_SIZE = 10;
const MAX_SIZE = 40;

export const GenerateBoxes = () => {
    const [arrayBox, setArrayBox] = useState([]);

    const refBox = useRef();
    const { width: widthCl, height: heigthCl } = useElementSize(refBox);

    const maxLeft = widthCl - MAX_SIZE;
    const maxTop = heigthCl - MIN_SIZE;

    const spawnParticle = useCallback(() => {
        setArrayBox((array) => {
            const newItem = {
                id: v4(),
                left: Math.random() * maxLeft,
                top: Math.random() * maxTop,
                size: MAX_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
                speed: Math.random() * 10,
                color: generateColor(),
            };
            return [...array, newItem];
        });
    }, [maxLeft, maxTop]);

    const { isRunning, restart, stop } = useInterval(spawnParticle, 500);
    const stopSpawning = () => {
        stop();
    };
    const restartSpawning = () => {
        restart();
    };
    return (
        <div
            style={{
                width: '1200px',
                height: '100vh',
                border: '1px dashed gray',
            }}
            ref={refBox}
        >
            <div className="spawnArea">
                {arrayBox.map((box) => (
                    <Box key={box.id} {...box} />
                ))}
            </div>
            <div>
                {isRunning ? (
                    <button onClick={stopSpawning}>Stop</button>
                ) : (
                    <button onClick={restartSpawning}>Restart</button>
                )}
            </div>
        </div>
    );
};
