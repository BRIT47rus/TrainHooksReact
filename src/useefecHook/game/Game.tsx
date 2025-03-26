import {  useMemo } from "react";
import { useCharacterPosition } from "./useCharacterPosition";
import { generateDummies } from "./generateDummies";

const initialStyle:React.CSSProperties = {
  backgroundColor: "red",
  width: 100,
  height: 100,
  position: 'absolute' ,
  transition: "all 0.5s ease-in-out",
  left: 0,
  top: 0,
};

export const Game = () => {
  const [top, left] = useCharacterPosition(50);
//   const [style, setStyle] = useState(initialStyle);

const style =useMemo(()=>{
    return{
        ...initialStyle,
        top,left
    }
},[top,left])

//   useLayoutEffect(() => {
//     setStyle((prev) => {
//       return { ...prev, top, left };
//     })
//   }, [top, left]);

  return (
    <>
      <h1>
        [{top},{left}]
      </h1>
      <div style={style}></div>
      {generateDummies(10000)}
    </>
  );
};
