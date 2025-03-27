import React, { useState } from 'react';
import { LogSimpleText } from "./SimpleText";
import { LoggedPin } from './PininpHoced';

const init_data: (string | number)[] = ['', '', '']; // Типизируем init_data

export const ExampleHOC: React.FC = () => {
  const [digits, setDigits] = useState<(string | number)[]>(init_data); // Типизируем digits

  return (
    <p>
      <LoggedPin digits={digits} onChange={setDigits} />
      <LogSimpleText text='Привет' />
    </p>
  );
};