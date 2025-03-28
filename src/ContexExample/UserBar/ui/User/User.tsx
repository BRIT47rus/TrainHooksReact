import { FC } from "react";
import { useTheme } from "../../../ThemeContex";

export interface UserObj{
           name:string;
        age:number;
        avatar:string;
  
}


type UserProps={
user:UserObj
}
export const User:FC<UserProps> =({user})=>{

    const {theme}=useTheme();
    return(
        <div style={{background:theme}}>
            <span>{user.name}</span><br />
            <span>{user.age}</span><br />
            <div>
                <img src={user.avatar} />
            </div>
            

        </div>
    )
}