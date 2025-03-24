import { useState } from "react";
export type CounterProps = {
  initialState?:number;
  delta?:number
}
export const useCounter =<CounterProps> ( initialState = 0, delta = 1):[number,()=>void,()=>void] => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState((prev) => prev + delta);
  };
  const decrement = () => {
    setState((prev) => prev - delta);
  };

  return [state, increment, decrement];
};
