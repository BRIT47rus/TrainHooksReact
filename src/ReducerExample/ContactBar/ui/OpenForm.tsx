import { useState } from "react";
import { useContact } from "../ContactProvider/ContactProvider";
import { v4 } from "uuid";

export const OpenForm = () => {
  const [isopen, setIsopen] = useState(false);
  const [, dispatch] = useContact();

  const [namevalue, setNameValue] = useState("");
  const [secondaryValue, setSecondaryValue] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const onChangeSecondary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryValue(e.target.value);
  };

  const openStyle = {
    position: "absolute",
    top: "50%",
  
    border: "1px solid red",
    background:"red"
  };
  const addContact = () => {
    dispatch({
      type: "add",
      payload: {
        name: namevalue,
        lastname: secondaryValue,
        avatar: `https://cataas.com/cat?${name}${Math.random() * 10}`,
        id: v4(),
      },
    });
    setNameValue("");
    setSecondaryValue("");
    setIsopen(false);
  };

  return (
    <div>
      {!isopen && (
        <button onClick={() => setIsopen((prev) => !prev)}>Добавить</button>
      )}
      {isopen && (
        <form style={openStyle
      
        } onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="имя"
            value={namevalue}
            onChange={onChangeName}
          />
          <input
            type="text"
            placeholder="Фамилия"
            value={secondaryValue}
            onChange={onChangeSecondary}
          />
          <button onClick={addContact}>Add</button>
        </form>
      )}
    </div>
  );
};
