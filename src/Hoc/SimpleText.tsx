import React from 'react'; // Импортируем React
import { logRender } from "./logRenderHOC";

interface SimpleTextProps {
  text: string;
}

const SimpleText: React.FC<SimpleTextProps> = ({ text }) => {
  return <span>{text}</span>;
};

export const LogSimpleText = logRender(SimpleText);