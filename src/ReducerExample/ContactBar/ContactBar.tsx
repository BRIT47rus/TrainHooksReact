import { ContactProvider } from "./ContactProvider/ContactProvider";
import { Contacts } from "./ui/Contacts";
import { ContactToolbar } from "./ui/ContactToolbar";

export const ContactBar = () => {
  return (
    <div>
      <ContactProvider>
        <Contacts />
        <ContactToolbar/>
      </ContactProvider>
    </div>
  );
};
