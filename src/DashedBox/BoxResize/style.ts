export const COLOR = '#345678';
export const styles = {
    preview: (width, height) => ({
        width,
        height,
        position: 'relative',
        border: `2px dashed ${COLOR}`,
    }),
    widtText: (width) => ({
        width,
        position: 'absolute',
        left: 0,
        top: 0,
        color: COLOR,
        texAlign: 'center',
    }),
    heightText: (height) => ({
        height,
        position: 'absolute',
        left: 0,
        top: 0,
        color: COLOR,
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        texAlign: 'center',
    }),
};
