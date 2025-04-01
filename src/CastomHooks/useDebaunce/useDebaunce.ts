import { useEffect, useState } from "react"


export const useDebaunce = <T>(value: T, delay: number): T => {
  const [debaunced, setDebaunce] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebaunce(value)
    }, delay);

    return () => {
      clearTimeout(timeoutID)
    }
  }, [value, delay])


  return debaunced;
}