import { useEffect, useRef } from "react"

export const useUpdateCallback = (cb:()=>void) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            cb()
        }
    }, [cb])

}