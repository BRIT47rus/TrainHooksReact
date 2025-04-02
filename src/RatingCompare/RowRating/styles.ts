const FLEX_DIRECTION_ROW: FlexDirection = 'row';
export const styles = {
    container: {
        display: 'flex',
        flexDirection: FLEX_DIRECTION_ROW,
    },
    item: (dissable, filled, sellected) => ({
        width: sellected ? 50 : 40,
        height: sellected ? 50 : 40,
        margin: sellected ? 5 : 10,
        fontSize: sellected ? 24 : 14,
        borderRadius: 50,
        border: '1px solid blue',
        transition: 'all linear 100ms',
        backgroundColor: filled ? 'gray' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: dissable ? 0.5 : 1,
        // cursor: dissable ? 'none' : 'pointer',
    }),
};
