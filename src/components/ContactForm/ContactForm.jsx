import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const INITIAL_VALUES = { contactName: "", contactNumber: "" };

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactNew = {
      id: nanoid(),
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(contactNew);
    actions.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="contactName" required />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field
            type="tel"
            name="contactNumber"
            placeholder="000-00-00"
            required
          />
        </label>
        <button className={css.submitBnt} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
