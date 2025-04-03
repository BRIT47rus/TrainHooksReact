import './box.css';
export const styles = {
    component: {
        display: 'flex',
        width: 1200,
        height: 1200,
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
