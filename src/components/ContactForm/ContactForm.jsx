import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

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

  const numberRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactValidationSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    contactNumber: Yup.string()
      .matches(numberRegExp, "Phone number in the format xxx-xx-xx")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="contactName" required />
          <ErrorMessage className={css.errorText} name="contactName" component="span" />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field type="tel" name="contactNumber" required />
          <ErrorMessage className={css.errorText} name="contactNumber" component="span" />
        </label>
        <button className={css.submitBnt} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
