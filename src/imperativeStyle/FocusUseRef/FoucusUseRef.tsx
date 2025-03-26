import { useRef, useState } from "react";

export const FocusUseRef = () => {
  const refContainer = useRef<HTMLInputElement>(null);
  const toogleRef = useRef(false);

  const [toogledStat,setToogledState]=useState(false)



  const changeRef = ()=>{
      console.log('change ref', toogleRef);
    toogleRef.current = !toogleRef.current
  }
  const changeState =()=>{
      setToogledState((prev)=>!prev)
    }
    
    console.log('render state', toogledStat, ' render ref ',toogleRef );
  
  const focusInput = () => {
    refContainer.current?.focus();
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (text === "blur") {
      refContainer.current?.blur();
    }
  };
  return (
    <div>
      <input ref={refContainer} onChange={onChange} />
      <br />
      <button onClick={focusInput}>Focus</button>
      <p>
        <button  onClick={changeRef}>Change ref</button>
        <button  onClick={changeState}>Change state</button>
      </p>
    </div>
  );
};
