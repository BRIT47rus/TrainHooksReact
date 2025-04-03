import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    row__item: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: '14px 7px',
        margin: '10',
    },
};
