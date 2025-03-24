import { useState } from "react";

export const HookUseState = () => {
    const [showClicks, setShowClicks] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [clicks2, setClicks2] = useState(0);

  const onClick = () => {
    setTimeout(() => {
      setClicks((prev) => prev + 1);
    }, 1000);
  };
  const onClick2 = () => {
    setTimeout(() => {
        setClicks2(clicks2 + 1);
    }, 1000);
  };

  const toogleShowClicks = () => {
    setShowClicks((prev) => !prev);
  };
  const clicksText: string | number = showClicks ? clicks : "";
  const clicksText2: string | number = showClicks ? clicks2 : "";

  return (
    <div>
      <button onClick={onClick}>
        <span>Click! (function ) {clicksText}</span>
      </button>
      <button onClick={onClick2}>
        <span>Click! (no function ) {clicksText2}</span>
      </button>
      <button onClick={toogleShowClicks}>Toogle show clicks</button>
    </div>
  );
};

//Обратить внимание на передачу состояния в функции Set - в новое состояние лучше передавать функцию -  prev это текущее состояние .
// setTimeout показывает что при передаче cb состояние всегда будут актуальное
