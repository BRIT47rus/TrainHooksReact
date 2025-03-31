import { FC } from "react";
import { useToogle } from "../UseToogle/UseToogle"

type ToogleProps ={
    label:string;
    valBoolean:boolean
}
export const ButtonToogle:FC<ToogleProps> =({label,valBoolean})=>{
const [isToggled,setIsToogled]=useToogle(valBoolean);
    return (
        <div>
            <span>{label}</span>
            <button onClick={()=>setIsToogled()} >{isToggled ? 'ON': 'OFF'}</button>
        </div>
    )
}