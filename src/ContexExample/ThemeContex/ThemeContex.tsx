import { createContext, useState } from "react";
import { ThemeColor } from "./Theme";

const ThemeContext = createContext();



export const ThemeProvider =()=>{
    const [theme,setTheme]=useState(ThemeColor.BLUE);

    return [theme,setTheme]

    return <ThemeContext value={value} {...props}/>
}