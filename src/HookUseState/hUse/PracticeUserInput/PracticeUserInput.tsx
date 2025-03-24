import { useState } from "react";

type TUsers = {
  user: string;
};
const INITIAL_STATE = [{ user: "vova" }];

export const PracticeUserInputt = () => {
  const [users, setUsers] = useState<TUsers[]>(INITIAL_STATE);
  const [value, setValue] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue((prev) => (prev = e.target.value));

    setIsDisable(false)
 
  };

  const addUserHandle = () => {
   
    setUsers((prev) => [...prev, { user: value }]);
    setValue("");
    setIsDisable(true)
  };


  return (
    <div>
      <div>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Введите имя"
          value={value}
        />
      </div>
      <button onClick={addUserHandle} disabled={isDisable}>
        Добавить
      </button>
      {users &&
        users.map((user) => {
          return <span key={user.user}>{user.user}</span>;
        })}
    </div>
  );
};
