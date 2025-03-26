import { useEffect, useState } from "react"

export const useCharacterPosition = (step: number): [top: number, left: number] => {
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)


    useEffect(() => {
        const changePosition = (event: KeyboardEvent) => {
            switch (event.key) {

                case 'ArrowUp': {
                    setTop((prev) => prev - 50)
                    break;
                }
                case 'ArrowDown': {

                    setTop((prev) => prev + 50)
                    break;
                }
                case 'ArrowLeft': {

                    setLeft((prev) => prev - 50)
                    break;
                }
                case 'ArrowRight': {

                    setLeft((prev) => prev + 50)
                    break;
                }
            }

        }
        document.addEventListener('keydown', changePosition)
        return () => {
            document.removeEventListener('keydown', changePosition)
        }
    }, [step])

    return [top, left]
}