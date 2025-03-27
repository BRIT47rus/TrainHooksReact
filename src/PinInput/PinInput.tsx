import { FC, useRef } from "react";

type PinInputProps={
    digits:string[] | number[];
    onChange:()=>void;
}
const updateArray =(array:string[],index:number,value:string):string[]=>{
    const copy = [...array]
    copy[index]= value;
    return copy;
}

export const PinInput :FC<PinInputProps>=({digits,onChange})=>{
const inputsRef = useRef(new Array(digits.length));
const inputs =inputsRef.current;

const handleChangeInput=(index:number,newValue:string)=>{
    const oldDigit = digits[index];
    const newDigit = newValue.trim().replace(oldDigit,' ')
    if(newDigit <'0' || newDigit >'9')return;
    
    onChange(updateArray(digits,index,newDigit));
    if(index < digits.length -1){
        inputs[index +1].focus();
    }else{
        inputs[index].blur()
    }

}
const handleKeyPressed = (index:number,eventKey:React.KeyboardEvent<HTMLInputElement>){
if(eventKey !== 'Backspace')return;

if(digits[index]){
    onChange(updateArray(digits,index,''))
}else if(index >0){
    inputs[index-1].focus()
}


}
return(
    <div>
        {digits.map((digit,index)=>(
                <input key={index} 
                onChange={(event)=>handleChangeInput(index,event.target.value)}
                value={digit}
                ref={(ref)=>{
                    inputsRef.current[index]=ref
                }}
                onKeyDown={(event)=>handleKeyPressed(index,event.nativeEvent.key)}
                />
        ))}
    </div>
)
}