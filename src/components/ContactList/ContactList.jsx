import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDelete} />
        </li>
      ))}
    </ul>
  );
}
