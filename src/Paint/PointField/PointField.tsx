import { EventHandler, MouseEvent, useEffect, useState } from "react"
import { useDebaunce, useEventListener } from "../../CastomHooks"
import { Point } from "../Point/Point"

type PointType={
    x:number,
    y:number
}
const INITIAL_POINT:PointType={
    x:0,
    y:0
}
export const PointField = ()=>{
    const [latsPoint,setLastPoint] =useState<PointType>(INITIAL_POINT)
    const debauced = useDebaunce(latsPoint,300)

    const [pathLast,setPathLast]=useState<PointType[]>([]);
    const [pathDebaunced,setDebauncedPath]=useState<PointType[]>([])

    useEventListener('mousemove',(event)=>{
        const {clientX,clientY}=event;
        const point:PointType = {x:clientX,y:clientY};
        setLastPoint(point)
        setPathLast((array)=>(
                [...array,latsPoint]
        ))

    })

    useEffect(()=>{
        setDebauncedPath((array)=>(
            [...array,debauced]
        ))
    },[debauced])

    return(
        <>
        {pathLast && pathLast.map((dot,index)=>(
                <Point color="blue" left={dot.x} top={dot.y} key={index}/>
        ))}
        {pathDebaunced && pathDebaunced.map((dot,index)=>(
                <Point color="red" left={dot.x} top={dot.y} key={index}/>
        ))}
        
        </>
    )
}