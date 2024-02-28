import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          // Set submitting state to true to show loading feedback
          setSubmitting(true);

          // Add contact
          onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
          });

          // Reset the form after successful submission
          resetForm();
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          // Set submitting state back to false after form submission
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.contactForm}>
          <div className={css.box}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameFieldId}
              autoComplete="off"
            />
            <ErrorMessage className={css.error} name="name" as="span" />
          </div>
          <div className={css.box}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id={numberFieldId}
              autoComplete="off"
            />
            <ErrorMessage className={css.error} name="number" as="span" />
          </div>

          <button
            className={css.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding contact...' : 'Add contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
