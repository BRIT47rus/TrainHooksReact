import { FC, memo, useCallback, useState } from "react";
import { ListItem } from "./ListItem";
type ListFProps = {
  id: number;
  name: string;
};
interface ItemProp{
    items:ListFProps[]
}

export const ListF:FC<ItemProp> = ({items} ) => {
  const ucbHandler = useCallback((item:ListFProps) => {
    console.log("Этот итем в колбэке :", item);
  },[]);
  const [, setTrigger] = useState();
  const render = () => {
    setTrigger({});
  };
console.log('render');

  return (
    <>
      {items.map((item) => (
        <ListItem item={item} key={item.id} onClick={ucbHandler} />
      ))}

      <button onClick={render}>Render</button>
    </>
  );
}
