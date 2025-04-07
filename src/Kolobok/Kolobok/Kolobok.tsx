import { ItemEmoji } from './item';

export const Kolobok = () => {
    const koloboksArray = [];
    for (let i = 0; i <= 5; i++) {
        koloboksArray.push(<ItemEmoji />);
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                padding: 20,
            }}
        >
            {koloboksArray}
        </div>
    );
};
