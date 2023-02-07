import { useFormik } from "formik";
import React from "react";

const Formcontact = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Website: "",
      Message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="Name"
        name="Name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.Name}
      />
      <input
        id="Email"
        name="Email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.Email}
      />
      <input
        id="Website"
        name="Website"
        type="text"
        placeholder="Website"
        onChange={formik.handleChange}
        value={formik.values.Website}
      />
      <textarea
        id="Message"
        name="Message"
        placeholder="Message"
        onChange={formik.handleChange}
        value={formik.values.Message}
      />
      <button type="submit" className="site-btn">
        Submit
      </button>
    </form>
  );
};

export default Formcontact;
