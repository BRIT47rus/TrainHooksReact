import {useToUpper,useTolower,useTrim} from "../useFacrory/createdMapedHook"
type TargetIvent = React.ChangeEvent<HTMLInputElement>

export const ExampleFactory = ()=>{
const [tolower,seValLower]=useTolower("TO LOWER")
const [touppe,setUpper]=useToUpper('to upper')
const [totrim,setTrim]=useTrim('   trim    value   ')


const handlLower = (e:TargetIvent)=>{
    seValLower(e.target.value)
}
const handlUpper = (e:TargetIvent)=>{
    setUpper(e.target.value)
}
const handlTrim = (e:TargetIvent)=>{
    setTrim(e.target.value)
}

    return(
        <div>
            <p>Вниз</p><br />
            <input type="text" onChange={handlLower} value={tolower} />
            <p>Вверх</p><br />
            <input type="text" onChange={handlUpper} value={touppe} />
            <p>Убрать пробелы </p>
            <input type="text" onChange={handlTrim} value={totrim} />
        
        </div>
    )
}