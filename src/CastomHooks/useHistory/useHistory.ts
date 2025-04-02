import { useEffect, useState } from 'react';

export const useHistory = <T>(value: T): T[] => {
    const [history, setHistory] = useState<T[]>([]);

    useEffect(() => {
        setHistory((prev) => [...prev, value]);
    }, [value]);

    return history;
};
