import { memo } from "react";

type PointProps={
    top:number,
    left:number,
    color:string
}
const SIZE = 10;
export const Point =memo(({color,left,top}:PointProps)=>{
    return <div style={{
        position:'absolute',
        top:top -SIZE/2,
        left:left-SIZE/2,
   width:SIZE,
    height:SIZE,
borderRadius:SIZE/2,
background:color
    }}/>
})