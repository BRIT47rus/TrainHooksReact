import { EventHandler, useCallback, useState } from "react";
import { useEventListener } from "../../CastomHooks";
type CoordsElement ={
    x:number;
    y:number;
}

export const FollowCursor = () => {
  const [coords, setCoords] = useState<CoordsElement[]>([]);

  const onMouseEvent = useCallback((event:EventHandler) => {
    const { clientX, clientY } = event;
    const coordsEvent = {
      x: clientX,
      y: clientY,
    };
    setCoords((prevState) => [...prevState, coordsEvent]);
  },[]);

  useEventListener("mousemove", onMouseEvent);
  return (
    <div>
      <h1>Координаты</h1>
      {coords &&
        coords.map((point, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: point.y,
              left: point.x,
              width: 10,
              height: 10,
              background: "blue",
              borderRadius: 10,
            }}
          />
        ))}
    </div>
  );
};
