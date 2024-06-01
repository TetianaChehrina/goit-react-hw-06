import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  // const [filter, setFilter] = useState("");
  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <ContactList />
    </div>
  );
}
