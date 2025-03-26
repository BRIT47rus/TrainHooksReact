
export const generateDummies =(count:number)=>{
const dummies=[];
    for(let i =0;i<count;i++){
        dummies.push(<div key={i}>i = {i}</div>)
    }
    return dummies;
} 