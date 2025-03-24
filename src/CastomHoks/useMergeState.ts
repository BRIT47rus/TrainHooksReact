import { useState } from "react"
import { Inite_props } from "../classVsFunction/FormUser";



export const useMergeState = (initialState: Inite_props[]):[Inite_props[],(changed: Inite_props)=>void] => {
    const [state, setState] = useState(initialState);

    const mergeState = (changed: Inite_props) => {
        setState((prev) => {
            return [
                ...prev,
                changed
            ]
        })

    }
    return [state, mergeState]


}