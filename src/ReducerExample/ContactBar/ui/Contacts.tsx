import { useContact } from "../ContactProvider/ContactProvider";

export const Contacts = () => {
  const [state, dispatch] = useContact();
  const { contacts, selectedId } = state;

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "grey",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {contacts.map((contact) => (
        <div
          style={selectedId === contact.id ? { background: "red" } : {}}
          key={contact.id}
          onClick={() =>
            dispatch({ type: "select", payload: { id: contact.id } })
          }
        >
          <div>
            <img
              src={contact.avatar}
              alt=""
              style={{
                width: 300,
                height: 300,
              }}
            />
          </div>
          <span>
            {contact.name} {contact.lastname}
          </span>
        </div>
      ))}
    </div>
  );
};
