import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsList from "../contacts.json";
import { useState } from "react";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(contactsList);

  const contactOnDelete = () => {
    setContacts();
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} contactOnDelete={contactOnDelete} />
    </div>
  );
};

export default App;
