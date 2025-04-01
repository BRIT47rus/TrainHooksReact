import { useLocaleStorage } from "../CastomHooks/useLocaleStorage/useLocaleStorage";
import React from 'react';

interface User {
  name: string;
  age: number;
  desc: string;
}

const INITIAL_USER: User = {
  name: "vova",
  age: 34,
  desc: "Занимаюсь вэб-разработкой",
};

export const InputsLocaleStorage = () => {
  const [user, setUser, removeUser] = useLocaleStorage<User>("user", INITIAL_USER);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) : value,
    }));
  };

  const handleRemove = () => {
    removeUser();
  };

  return (
    <>
      <p>
        <label>Имя: </label>
        <input type="text" name="name" value={user.name} onChange={onChange} />
      </p>
      <p>
        <label>Возраст: </label>
        <input type="number" name="age" value={user.age} onChange={onChange} />
      </p>
      <p>
        <label>Описание: </label>
        <input type="text" name="desc" value={user.desc} onChange={onChange} />
      </p>
      <button onClick={handleRemove}>Очистить данные</button>
    </>
  );
};