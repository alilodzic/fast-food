import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

const Formcontact = () => {
  const SchemaValidation = Yup.object({
    Name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    Website: Yup.string().max(20, "Must be 20 characters or less"),
    Email: Yup.string().email("Invalid email address").required("Required"),
    Message: Yup.string()
      .max(50, "Must be 50 characters or less")
      .min(5, "Must be 5 characters or more")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Website: "",
      Message: "",
    },
    validationSchema: SchemaValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik);

  const { handleSubmit, handleChange, values, errors, touched, isValid } =
    formik;
  console.log(touched);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="position-relative" controlId="validationFormik01">
        <Form.Control
          type="text"
          name="Name"
          placeholder="Name"
          onChange={handleChange}
          value={values.Name}
          isInvalid={!!errors.Name}
          isValid={touched.Name && !errors.Name}
        />
        <Form.Control.Feedback tooltip type="invalid">
          {errors.Name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="position-relative" controlId="validationFormik02">
        <Form.Control
          name="Email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.Email}
          isInvalid={!!errors.Email}
          isValid={touched.Email && !errors.Email}
        />
        <Form.Control.Feedback tooltip type="invalid">
          {errors.Email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="position-relative" controlId="validationFormik01">
        <Form.Control
          name="Website"
          type="text"
          placeholder="Website"
          onChange={handleChange}
          value={values.Website}
          isInvalid={!!errors.Website}
          isValid={touched.Website && !errors.Website}
        />
        <Form.Control.Feedback tooltip type="invalid">
          {errors.Website}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="position-relative" controlId="validationFormik01">
      <Form.Control
        as="textarea"
        name="Message"
        placeholder="Message"
        onChange={handleChange}
        value={values.Message}
        isInvalid={!!errors.Message}
        isValid={touched.Message && !errors.Message}
      />
      <Form.Control.Feedback tooltip type="invalid">
      {errors.Message}
    </Form.Control.Feedback>
      </Form.Group>


      <button type="submit" className="site-btn">
        Submit
      </button>
    </Form>
  );
};

export default Formcontact;
