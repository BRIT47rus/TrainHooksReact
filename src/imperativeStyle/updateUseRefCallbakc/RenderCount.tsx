import { useCallback, useEffect } from "react";
import { useCounter } from "../../usestateHOOK/CastomHoks";
import { useUpdateCallback } from "./useUpdateRende";

export const RenderCount = () => {
  const [count, increment] = useCounter(0, 1);

  useEffect(() => {
    console.log("после рендера", count);
  }, []);

  console.log("рендер компонента", count);

  const callbackRender = useCallback(() => {
    
    console.log("value change", count);
  }, [count]);
  useUpdateCallback(callbackRender);
  return (
    <>
      <button onClick={increment}>render</button>
    </>
  );
};
