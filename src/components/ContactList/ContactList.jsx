import { useSelector } from "react-redux";

import { selectContacts, selectNameFilter } from "../../redux/selectors";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const searchContact = useSelector(selectNameFilter);

  const contacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
