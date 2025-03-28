import { FC } from "react";

type UserTitleProps={
    label:string;
}

export const UserTitle:FC<UserTitleProps> =({label})=>{
    return <label>{label}</label>
}