import { useReducer } from "react";
import { reducer } from "./Reducer";

export const ReducerExample1 = () => {
  const [state, dispacth] = useReducer(reducer, { name: "", count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <h2>Имя операции : { state.name}</h2>
      <br />
      <button onClick={() => dispacth({ type: "increment" })}>add 1</button>
      <button onClick={() => dispacth({ type: "double_increment" })}>
        add 2
      </button>
      <button onClick={() => dispacth({ type: "clear" })}>Clear</button>
    </div>
  );
};
