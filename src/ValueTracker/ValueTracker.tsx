import React, { useState } from 'react';
import { useHistory } from '../CastomHooks';

export const ValueTracker = () => {
    const [inputValue, setInputValue] = useState('');
    const valueHistory = useHistory(inputValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите что-нибудь"
            />
            <h3>История введенных значений:</h3>
            <ul>
                {valueHistory.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    );
};

export default ValueTracker;
