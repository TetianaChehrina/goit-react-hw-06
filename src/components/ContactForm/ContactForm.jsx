import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
  number: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
});

const ContactForm = ({ onAddContact }) => {
  const id = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contact_form}>
        <div className={css.input_container}>
          <label htmlFor={`${id}-name`}>Name</label>
          <Field
            className={css.form_input}
            type="text"
            name="name"
            id={`${id}-name`}
          />
          <ErrorMessage
            className={css.form_messageError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.input_container}>
          <label htmlFor={`${id}-number`}>Number</label>
          <Field
            className={css.form_input}
            type="text"
            name="number"
            id={`${id}-number`}
          />
          <ErrorMessage
            className={css.form_messageError}
            name="number"
            component="span"
          />
        </div>

        <button className={css.form_button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
