import { CounterProps, useCounter } from "./useCounter";

export const TestCastomHooks = ({initialState,delta}:CounterProps) => {
  const [state, inc, dec] = useCounter(initialState,delta);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};
