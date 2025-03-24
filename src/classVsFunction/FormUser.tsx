import React, { useState } from "react";

export type FormInputProps = {
  name: string;
  value: string | number;
  label: string;
  onChange?: (value: string | number) => void;
  type?: string;
};

const FormInput = ({
  label,
  onChange,
  value,
  type = "text",
  name,
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
      />
    </div>
  );
};

type Inite_props = {
  name: string;
  age: number;
};

const INITIAL_STATE: Inite_props[] = [];

export const FormUser = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addNewUser = (newUser: Inite_props) => {
    if (newUser.name && newUser.age) {
      setState((prevState) => [...prevState, newUser]);
      setName("");
      setAge(0);
    }
  };

  return (
    <div>
      <form onSubmit={e=>e.preventDefault()}>
        <FormInput
          label="name"
          value={name}
          onChange={(value) => setName(value as string)} // Исправлено
          name="nameInput"
        />
        <FormInput
          label="age"
          type="number"
          value={age}
          onChange={(value) => setAge(value as number)} // Исправлено
          name="ageInput"
        />
        <button onClick={() => addNewUser({ name, age })}>Добавить</button>
      </form>
      <div>
        {state.length > 0 &&
          state.map((user) => (
            <div key={user.name}>
              <span>имя: {user.name}</span>
              <span>возраст: {user.age}</span>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};
