import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      <Contact contacts={contacts} onDeleteContact={onDeleteContact}/>
    </ul>
  );
};

export default ContactList;
