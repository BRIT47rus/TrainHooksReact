import { useCallback, useState } from "react";

// Общий тип для функции преобразования
type StringTransformFunction = (value: string) => string;

// Функция для создания пользовательского хука с преобразованием
const createStringTransformHook = (transformFn: StringTransformFunction) => {
    return (initialValue: string) => {
        const [value, setValue] = useState<string>(transformFn(initialValue));

        const setValueMemo = useCallback(
            (newValue: string) => {
                setValue(transformFn(newValue));
            },
            [transformFn]
        );

        return [value, setValueMemo] as const;
    };
};

// Хук для преобразования строки в нижний регистр
export const useTolower = createStringTransformHook((value) =>
    value.toLocaleLowerCase()
);

// Хук для преобразования строки в верхний регистр
export const useToUpper = createStringTransformHook((value) =>
    value.toLocaleUpperCase()
);

// Хук для удаления пробелов в начале и конце строки
export const useTrim = createStringTransformHook((value) => value.trim());