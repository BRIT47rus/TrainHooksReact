import { useEffect } from "react";
import { useCounter } from "../../usestateHOOK/CastomHoks";
import { updateClick } from "./updateClick";

export const CountUE = () => {
  const [state, increment] = useCounter(0, 1);

  useEffect(() => {
    document.title = `Count ${state}`;
  }, [state]);

  //   useEffect(() => {
  //     (async () => {
  //       const resolve = await updateClick(state);
  //       console.log(resolve);
  //     })();
  //   }, [state]);

  useEffect(() => {
    console.log(">> Рендер ", state);
    return () => {
      console.log("<< Удалениу ", state);
    };
  }, [state]);

  useEffect(() => {
    console.log("компонент рендер");
    return () => {
      console.log("удален рендер");
    };
  }, []);
  useEffect(()=>{
    console.log('каждый рендер');
  })

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
};
