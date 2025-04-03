import { ReactNode } from 'react';
import { styles } from '../styles';

type RowProp = {
    children: ReactNode;
};
export const RowResize = ({ children }: RowProp) => {
    return <div style={styles.row}>{children}</div>;
};
