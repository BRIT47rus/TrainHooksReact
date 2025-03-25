import { FC } from "react";


type HeadProp={
    max_pow:number
}
export const HeadTable:FC<HeadProp> =({max_pow})=>{
const cells = [];

    for(let pow =1;pow <= max_pow;pow++ ){

        cells.push( 
            <th key={pow}>^{pow}</th>
        )
    }

    return <tr>{cells}</tr>
}