import { RefObject, useEffect, useRef } from "react"
export type EventHandler = Event | MouseEvent
type SuportedElement = Window | HTMLElement | Document | null;
type HandlerType = (e:EventHandler ) => void

export const useEventListener = (eventName: string, handler: HandlerType, element: SuportedElement = window) => {
    const savedHandler: RefObject<HandlerType | undefined> = useRef(undefined);
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler])
    useEffect(() => {
        const isSupportedElement = element?.addEventListener;
        if (!isSupportedElement) {
            throw new Error('Element is not supported listen' + element)
        }
        const evenetListener = (event: EventHandler) => {
            if (savedHandler.current) {
                savedHandler?.current(event)
            }
        }
        element.addEventListener(eventName, evenetListener)
        return () => {
            element.removeEventListener(eventName, evenetListener)

        }
    }, [element, eventName])

}