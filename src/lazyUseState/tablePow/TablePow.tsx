import { useState } from "react";
import { heavePow } from "./heavePow";
import { HeadTable } from "./HeadTable";
import { RowTable } from "./RowTable";
const max_number = 20;
const max_pow = 5;

export const TablePow = () => {
  const [data, setData] = useState(() => {
    return heavePow(max_number, max_pow);
  });
  const [, setRerender] = useState({});

  const removeFirstElement = () => {
    setData((prev) => {
      const [, ...rest] = prev;
      return rest;
    });
  };
  const rerernder = () => setRerender({});

  return (
    <>
      <div>
        <button onClick={removeFirstElement}>Remove</button> first
      </div>
      <div>
        <button onClick={rerernder}>Rerender</button>
      </div>
      <table>
        <thead>
          <HeadTable max_pow={max_pow} />
        </thead>

        <tbody>
          {data.map((record, i) => (
            <RowTable record={record} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};
