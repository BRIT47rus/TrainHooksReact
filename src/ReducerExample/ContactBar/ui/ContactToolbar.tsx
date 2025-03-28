import { useContact } from "../ContactProvider/ContactProvider";

export const ContactToolbar = () => {
  const [state, dispatch] = useContact();
  const clearContacts = () => {
    dispatch({ type: "reflesh" });
  };

  const removeContact = () => {
    const id = state.selectedId || null;
    if (id) dispatch({ type: "remove", payload:{ id }});
    return;
  };

  const addContact = () => {};
  return (
    <div>
      <button onClick={addContact}>Add</button>
      <button onClick={clearContacts}>reflesh</button>

      {state.selectedId && <button onClick={removeContact}>Remove</button>}
    </div>
  );
};
