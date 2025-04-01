import { useEffect, useRef, useState } from "react"

export const useThrotle = <T>(value: T, delay: number): T => {
    const [throtled, setThrotled] = useState(value);
    const refContainer = useRef(value)

    useEffect(() => {
        refContainer.current = value;
    }, [value])

    useEffect(() => {

        const intervalId = setInterval(() => {
            setThrotled(refContainer.current)
            
        }, delay);

        return ()=>{
            clearInterval(intervalId)
        }
    }, [delay])

    return throtled;
}