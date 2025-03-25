import { useState } from "react";
import { onChange } from "./onChange";
import expessions from "./express";

export const Calc = () => {
  const { add, devide, multiply, substuct } = expessions;
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState("+");

  const applyAction = (fn, fnSign) => () => {
    setAction(() => fn);
    setSign(fnSign);
  };

  return (
    <>
      <p>
        <input type="number" value={a} onChange={onChange(setA)} />
        <span> {sign} </span>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span>= {action ? action(a,b): ''}</span>
      </p>
      <p>
        <button onClick={applyAction(add, "+")}>Add</button>
        <button onClick={applyAction(substuct, "-")}>Substruct</button>
        <button onClick={applyAction(multiply, "*")}>Multiply</button>
        <button onClick={applyAction(devide, "/")}>Devide</button>
      </p>
    </>
  );
};
