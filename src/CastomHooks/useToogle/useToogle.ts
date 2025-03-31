import { useReducer } from "react";

export const useToogle = (initialValue = false) => useReducer((newValue) => !newValue, initialValue)