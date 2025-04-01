import {  useEffect, useState } from "react"
import { useDebaunce, useEventListener } from "../../CastomHooks"
import { Point } from "../Point/Point"
import { useThrotle } from "../../CastomHooks/useThrotle/useThrotle"

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
    const throtyeld= useThrotle(latsPoint,300)

    const [pathLast,setPathLast]=useState<PointType[]>([]);
    const [pathDebaunced,setDebauncedPath]=useState<PointType[]>([])
    const [pathThrotle,setpathThrotle]=useState<PointType[]>([])

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


    useEffect(()=>{
        setpathThrotle((array)=>(
            [...array,throtyeld]
        ))
    },[throtyeld])

    return(
        <>
        {pathLast && pathLast.map((dot,index)=>(
                <Point color="blue" left={dot.x} top={dot.y} key={index}/>
        ))}
        {pathDebaunced && pathDebaunced.map((dot,index)=>(
                <Point color="red" left={dot.x} top={dot.y} key={index}/>
        ))}
        {pathThrotle && pathThrotle.map((dot,index)=>(
                <Point color="green" left={dot.x+10} top={dot.y+10} key={index}/>
        ))}
        
        </>
    )
}