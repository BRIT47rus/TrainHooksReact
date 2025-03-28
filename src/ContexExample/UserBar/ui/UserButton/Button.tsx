import { FC, ReactNode } from "react"
import { useTheme } from "../../../ThemeContex"

type ButtonProps ={
    children:ReactNode,
    onClick:()=>void
}

export const Button:FC<ButtonProps> =({children,onClick})=>{

const {theme}=useTheme()

const style ={
    background:theme,
    padding:'20px 40px'
   
}
    return    <button style={style} onClick={onClick}>{children}</button>
}