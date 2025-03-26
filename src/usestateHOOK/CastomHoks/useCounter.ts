import { useState } from "react";
export type CounterProps = [state:number,increment?:()=>void,
  decrement?:()=>void]

export const useCounter = ( initialState:number = 0, delta:number = 1):CounterProps=> {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState((prev) => prev + delta);
  };
  const decrement = () => {
    setState((prev) => prev - delta);
  };

  return [state, increment, decrement];
};
