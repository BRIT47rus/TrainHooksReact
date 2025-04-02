import { useEffect, useState } from 'react';

export const useAnimationText = (text: string, delay: number) => {
    const [currentNum, setCurrentNum] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentNum((prev) => {
                const isLast = prev === text.length - 1;
                return isLast ? 0 : prev + 1;
            });
        }, delay);
        return () => {
            clearInterval(intervalID);
        };
    }, [text, delay]);
    return text.substring(0, currentNum);
};
