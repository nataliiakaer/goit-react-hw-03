import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>;
};

export default App;
