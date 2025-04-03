import './box.css';

const boxRound = `@keyframes boxRound {
    0% {
        transform: rotate(2deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`;
export const styles = {
    component: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    box: (
        size: number,
        color: string,
        top: number,
        left: number,
        speed: number
    ) => ({
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: 4,
        animation: `boxRound ${speed}s linear infinity`,
    }),
};
