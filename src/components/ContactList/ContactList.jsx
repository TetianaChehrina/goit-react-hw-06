import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
