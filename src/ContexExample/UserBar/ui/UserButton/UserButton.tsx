import { useTheme } from "../../../ThemeContex"
import { ThemeColor } from "../../../ThemeContex/Theme"
import { Button } from "./Button"


export const UserButton =()=>{
        const {setTheme}= useTheme()

    return(
        <div>
            <Button onClick={()=>setTheme(ThemeColor.BLUE)}>Blue</Button>
            <Button onClick={()=>setTheme(ThemeColor.RED)}>Red</Button>
            <Button onClick={()=>setTheme(ThemeColor.GREEN)}>Green</Button>
        </div>
    )
}