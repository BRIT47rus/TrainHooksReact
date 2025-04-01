import { useState } from "react"

const isFunction = (check: any) => typeof isFunction === 'function';

export const useLocaleStorage = (key: string, initialValue: any) => {
    const [storageValue, setStorageValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                return JSON.parse(key)
            }
            const evaluated = isFunction(initialValue) ? initialValue() : initialValue;
            window.localStorage.setItem(key, JSON.stringify(evaluated))


        } catch (e) {
            console.log('ошибка ');
            return initialValue;
        }

    })
    const setValue = (newValue: any) => {
        try {
            const evaluated = isFunction(newValue) ? initialValue() : newValue;
            window.localStorage.setItem(key, JSON.stringify(evaluated));
            setStorageValue(evaluated)
        } catch (e) {
            console.log('ошибка записи');

        }
    }
    return [storageValue, setValue]
}