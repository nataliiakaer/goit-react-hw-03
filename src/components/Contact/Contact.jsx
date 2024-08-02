import css from "./Contact.module.css";

const Contact = ({ contacts }) => {
  return contacts.map((contact) => {
    return (
      <li key={contact.id} className={css.item}>
        <div>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        <button className={css.deleteBtn} type="button">
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
