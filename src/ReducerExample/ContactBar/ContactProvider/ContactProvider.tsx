import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { v4 } from "uuid";
import { reducerContacts, TypeActions } from "../contactReducer/contactReducer";

type ContactProviderProps = {
  children: ReactNode;
};

export type ContactType = {
  name: string;
  lastname: string;
  avatar: string;
  id: string;
};
export type StateContacts = {
  contacts: ContactType[];
  selectedId: string | null;
};
export const initial_state: StateContacts = {
  contacts: [
    {
      name: "vova",
      lastname: "fedorov",
      avatar: `https://cataas.com/cat?${name}${Math.random() * 10}`,
      id: v4(),
    },

    {
      name: "vova",
      lastname: "Marmeladov",
      avatar: `https://cataas.com/cat?${name}${Math.random() * 10}`,
      id: v4(),
    },
  ],
  selectedId: null,
};

const ContactContext = createContext<
  [StateContacts, Dispatch<TypeActions>] | undefined
>(undefined);

export const ContactProvider: FC<ContactProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducerContacts, initial_state);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("Нет ваш контекст");
  return context;
};
