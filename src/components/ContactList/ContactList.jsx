import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      <Contact contacts={contacts} />
    </ul>
  );
};

export default ContactList;
