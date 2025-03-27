import { FC, memo } from "react";

type ListItemProps = {
  item: { id: number; name: string };
  onClick: (item:{ id: number; name: string }) => void;
};
export const ListItem:FC<ListItemProps> = memo(({ item, onClick }) => {
  const { name } = item;

  console.log(`<< render listItem ${name}`);

  return <div onClick={() => onClick(item)}>{name}</div>;
})
