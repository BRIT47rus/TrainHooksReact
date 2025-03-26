import { FC } from "react";



export type RowProps = {
  [key:number]: number;
};

export const RowTable:FC<{ record: RowProps }> = ({record}) => {
  return (
    <tr>
      {Object.values(record)
        .sort((a,b) => a - b)
        .map((value,i) => (
          <td key={i}>{value}</td>
        ))}
    </tr>
  );
};
