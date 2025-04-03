const COLORS = ['red', 'blue', 'green', 'yellow'];

export const generateColor = () => {
    const randomIdx = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIdx];
};
