import React from 'react'; // Импортируем React
import { LogSimpleText } from "./SimpleText";

export const ExampleHOC: React.FC = () => {
  return (
    <p>
      <LogSimpleText text='Привет' />
    </p>
  );
};