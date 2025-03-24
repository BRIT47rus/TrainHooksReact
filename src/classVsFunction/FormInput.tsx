import React from 'react';

export type FormInputProps = {
  name: string;
  value: string | number;
  label: string;
  onChange?: (value: string | number) => void;
  type?: string;
};

type eTarge = React.ChangeEvent<HTMLInputElement>;

export const FormInput = ({ label, onChange, value, type = "text", name }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e: eTarge) => {
          onChange && onChange(e.target.value);
        }}
      />
    </div>
  );
};










