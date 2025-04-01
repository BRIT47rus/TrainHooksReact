import { SetStateAction, useState } from "react"

const isFunction = (check: any): boolean => typeof check === 'function';

export const useLocaleStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
    const [storageValue, setStorageValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                return JSON.parse(item) as T
            }
            const evaluated = isFunction(initialValue)
                ? (initialValue as () => T)()
                : initialValue;
            window.localStorage.setItem(key, JSON.stringify(evaluated))
            return evaluated;

        } catch (e) {
            console.log('ошибка ');
            return initialValue;
        }

    })
    const setValue = (newValue: SetStateAction<T>) => {
        try {
            const evaluated = isFunction(newValue)
                ? (newValue as () => T)()
                : newValue;
            window.localStorage.setItem(key, JSON.stringify(evaluated));
            setStorageValue(evaluated)
        } catch (e) {
            console.log('ошибка записи');

        }
    }
    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);
            setStorageValue(initialValue); // или null, если нужно
        } catch (e) {
            console.error("Ошибка при удалении из localStorage:", e);
        }
    };
    return [storageValue, setValue, removeValue]
}