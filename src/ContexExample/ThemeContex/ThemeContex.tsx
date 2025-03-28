import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeColor } from "./Theme";

type ThemeContextType = {
  theme: ThemeColor;
  setTheme: Dispatch<SetStateAction<ThemeColor>>;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme =()=>{
const theme = useContext(ThemeContext);
if(!theme)throw new Error('Не назначен цвет' )
return theme;
}


export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeColor>(ThemeColor.BLUE);

  const value = useMemo<ThemeContextType>(() => {
    return {theme, setTheme}
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
