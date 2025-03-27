import  { useRef, useState } from "react";
import PinInput from "./PinInput";

const INITIAL_DIGITS: (string | number)[] = ["", "", "", ""];

export const ComponentPint = () => {
  const [digits, setDigits] = useState<(string | number)[]>(INITIAL_DIGITS);
  const ref = useRef<PinInput>(null); // Типизируем ref

  const onFocus = () => {
    ref.current?.focus();
  };

  const clearFN = () => {
    setDigits(INITIAL_DIGITS);
  };

  return (
    <div>
      <PinInput digits={digits} onChange={setDigits} ref={ref} />
      <button onClick={onFocus}>FOCUS</button>
      <button onClick={clearFN}>CLEAR</button>
    </div>
  );
};