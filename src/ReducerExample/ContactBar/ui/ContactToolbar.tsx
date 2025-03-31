import { useContact } from "../ContactProvider/ContactProvider";
import { OpenForm } from "./OpenForm";

export const ContactToolbar = () => {
  const [state, dispatch] = useContact();
  const clearContacts = () => {
    dispatch({ type: "reflesh" });
  };

  const removeContact = () => {
    const id = state.selectedId || null;
    if (id) dispatch({ type: "remove", payload: { id } });
    return;
  };

  //добавление


  return (
    <div>
        <button onClick={clearContacts}>reflesh</button>
      <OpenForm />

      {state.selectedId && <button onClick={removeContact}>Remove</button>}
    </div>
  );
};
