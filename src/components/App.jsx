import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsList from "../contacts.json";
import { useState } from "react";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(contactsList);
  const [searchValue, setSearchValue] = useState("");


  const showValueSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox searchValue={searchValue} showValueSearch={showValueSearch} />
      <ContactList
        contacts={visibleContact}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
