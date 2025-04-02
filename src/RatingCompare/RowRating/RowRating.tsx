import { Dispatch, SetStateAction } from 'react';
import { styles } from './styles';

type RowRating = {
    scope: number;
    onChange?: Dispatch<SetStateAction<number>>;
};
const INITIAL_RATTING = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const RowRating = ({ scope, onChange }: RowRating) => {
    return (
        <div style={styles.container}>
            {INITIAL_RATTING.map((ratting, index) => {
                const selected = ratting === scope;
                const filled = ratting <= scope;
                const dissable = !onChange;
                const style = styles.item(dissable, filled, selected);
                const onClick = () => {
                    if (onChange) {
                        onChange(ratting);
                    }
                };
                return (
                    <div style={style} onClick={onClick} key={index}>
                        {ratting}
                    </div>
                );
            })}
        </div>
    );
};
