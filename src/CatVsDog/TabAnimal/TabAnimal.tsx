import { CSSProperties } from 'react';

type TabAnimalType = {
    select: boolean;
    handleClickTab: () => void;
    textName: string;
};

export const TabAnimal = ({
    select,
    handleClickTab,
    textName,
}: TabAnimalType) => {
    const styleTab: CSSProperties = {
        padding: '20px 40px',
        margin: 20,
        backgroundColor: select ? 'red' : 'blue',
        borderBottom: select ? 'blue' : 'red',
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div style={styleTab} onClick={handleClickTab}>
                {textName}
            </div>
        </div>
    );
};
