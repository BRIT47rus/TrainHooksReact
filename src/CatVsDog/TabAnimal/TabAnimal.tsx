type TabProps = {
    who: string;
    selected: boolean;
    handleClick: () => void;
};

export const TabAnimal = ({ who, selected, handleClick }: TabProps) => {
    const handleTabClick = () => {
        if (handleClick) {
            handleClick();
        }
    };

    return (
        <div
            style={{
                padding: '40px 80px',
                borderBottom: '1px solid blue',
                color: selected ? 'red' : 'blue',
            }}
            onClick={handleTabClick}
        >
            <h1>{who}</h1>
        </div>
    );
};
