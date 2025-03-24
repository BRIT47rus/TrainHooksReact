import { useState } from "react";

export const HookUseState = ()=>{

const [clicks,setClicks]=useState(0);
const [showClicks,setShowClicks]=useState(false);


const onClick = ()=>{
    setTimeout(() => {
        setClicks((prev)=>prev+1)
        
    }, 1000);
} 


const toogleShowClicks = ()=>{
    setShowClicks(prev => !prev)
}
const clicksText:string|number = showClicks ? clicks : '';

    return (
        <div>

        <button onClick={onClick}>
            <span>Click! {clicksText}</span>
        </button>
            <button onClick={toogleShowClicks}>Toogle show clicks</button>
        </div>
    )
}