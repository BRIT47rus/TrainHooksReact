import { FC } from "react";

export interface UserObj{
           name:string;
        age:number;
        avatar:string;
  
}


type UserProps={
user:UserObj
}
export const User:FC<UserProps> =({user})=>{
    return(
        <div>
            <span>{user.name}</span><br />
            <span>{user.age}</span><br />
            <div>
                <img src={user.avatar} />
            </div>
            

        </div>
    )
}