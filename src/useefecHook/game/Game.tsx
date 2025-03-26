import { useCharacterPosition } from "./useCharacterPosition";

export const Game = () => {
const [top,left]=useCharacterPosition(50)


  return (
    <>
      <h1>
        [{top},{left}]
      </h1>
      <div
        style={{
          background: "red",
          width: 100,
          height: 100,
          position: "absolute",
          left,
          top,
          transition:'all 0.5s'
        }}
      ></div>
    </>
  );
};
