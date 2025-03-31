import { useCallback, useDebugValue, useState } from "react"


export const useToogle = (value: boolean): [boolean, () => void] => {
    const [toogle, setToggle] = useState(value || false);
    useDebugValue(toogle)
    const toggleFN = useCallback(() => {
        setToggle(prev => !prev)
    }, [])


    return [toogle, toggleFN]
}