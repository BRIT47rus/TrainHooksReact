import  { FC, useRef, useEffect, useImperativeHandle, forwardRef } from "react";

interface PinInputProps {
  digits: (string | number)[]; // Массив цифр (строки или числа)
  onChange: (newDigits: (string | number)[]) => void; // Функция обратного вызова при изменении ввода
}

const updateArray = (array: (string | number)[], index: number, value: string | number): (string | number)[] => {
  const copy = [...array];
  copy[index] = value;
  return copy;
};

 const PinInput: FC<PinInputProps> = ({ digits, onChange },ref) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Массив рефов для инпутов
  const inputs = inputsRef.current;

  // Убедимся, что inputsRef.current имеет правильную длину при инициализации
    useEffect(() => {
        inputsRef.current = Array(digits.length).fill(null);
    }, [digits.length]);

  const handleChangeInput = (index: number, newValue: string) => {
    const oldDigit = digits[index];
    const newDigit = newValue.trim().replace(oldDigit.toString(), ''); // Преобразуем oldDigit в строку
    if (newDigit < '0' || newDigit > '9') return;

    const updatedDigits = updateArray(digits, index, newDigit);
    onChange(updatedDigits); // Вызываем onChange с обновленным массивом

    if (index < digits.length - 1) {
      inputs[index + 1]?.focus(); // Используем опциональную цепочку
    } else {
      inputs[index]?.blur(); // Используем опциональную цепочку
    }
  };

  const handleKeyPressed = (index: number, eventKey: string) => { // eventKey: string
    if (eventKey !== 'Backspace') return;

    if (digits[index]) {
      onChange(updateArray(digits, index, ''));
    } else if (index > 0) {
      inputs[index - 1]?.focus(); // Используем опциональную цепочку
    }
  };
  useImperativeHandle(ref,()=>({
    focus:()=>inputs[0]?.focus()
  }))

  return (
    <div>
      {digits.map((digit, index) => (
        <input
          key={index}
          type="text" // Явно указываем type="text"
          maxLength={1} // Ограничиваем ввод одним символом
          onChange={(event) => handleChangeInput(index, event.target.value)}
          value={digit}
          ref={(ref) => {
            inputsRef.current[index] = ref;
          }}
          onKeyDown={(event) => handleKeyPressed(index, event.key)} // event.key
          style={{ width: '2em', textAlign: 'center' }} // Добавляем стиль для удобства
        />
      ))}
    </div>
  );
};

export default forwardRef(PinInput)