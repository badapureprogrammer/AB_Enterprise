import React from "react";
import { useFormik, validateYupSchema } from "formik";
import "../components/cssPages/Login.css";
import FooterComponent from "./Footer";

const LoginComponent = () => {

  const initialValues = {
    name: "",
    email: "",
    password: "",
    cfnpassword : "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {

    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } 
    else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    else if(!/^[a-zA-Z]\w{3,14}$/i.test(values.password)){
      // The password's first character must be a letter, 
      // it must contain at least 4 characters and no more than 15 characters 
      // and no characters other than letters, numbers and the underscore may be used
      errors.password = "Invalid password format";
    }
    if(!values.cfnpassword){
      errors.cfnpassword = "Required";
    }
    else if(values.cfnpassword !== values.password){
      errors.cfnpassword = "Password not match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors)

  return (
    <>
      <div className="login_banner">
        <div className="login">
          <h1>Login Here</h1>

          <form onSubmit={formik.handleSubmit} className="login_form">
            <div className="form_control">
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
            </div>
            <div className="form_control">
            <label htmlFor="email">Enter Your E-mail</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? <div className="errors">{formik.errors.email}</div>: null}
            </div>
            <div className="form_control">
            <label htmlFor="password">Enter Your Password</label>
            <input type="password" id="password" name="password"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? <div className="errors">{formik.errors.password}</div>:null}
            </div>
            <div className="form_control"> 
            <label htmlFor="cfnpassword">Confirm Password</label>
            <input type="password" id="cfnpassword" name="cfnpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cfnpassword}/>
            {formik.touched.cfnpassword && formik.errors.cfnpassword ? <div className="errors">{formik.errors.cfnpassword}</div>:null}
            </div>

            <button type="submit" className="submit_btn">Submit</button>
          </form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default LoginComponent;
