import React from "react";
// TODO: import useFormik from formik library
import{useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik ({
    initialValues: {
      email: "",
      password:"",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) {
        errors.password = "Field required";
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && (
            <div id="emailError">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="pswField">Password:</label>
          <input type="password" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}  />
          {formik.errors.password && (
            <div id="pswError">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
