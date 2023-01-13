import React from "react";
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignup } from "../../hooks/useSignup";

const SignupForm = ({ handleChange }) => {
  // paper Style
  const paperStyle = {
    // padding: 20,
    height: "80vh",
    width: "370px",
    background: "transparent",
  };
  // input Style
  const inputStyle = {
    boxSizing: "border-box",
    background: "",
  };

  // Button style
  const btnstyle = {};

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    blogUpdate: false,
    productUpdate: false,
  };
  const { signup, error, isLoading } = useSignup();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(6, "Password minimum length should be 6")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
  });
  // Functions
  // Form submission
  const onSubmit = async (values, props) => {
    // console.log(values);
    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 2000);
    await signup(values.name, values.email, values.password);
    await props.resetForm();
  };

  return (
    <>
      <Grid align="center">
        <Paper elevation={-0} style={paperStyle}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                {/* EMail input */}
                <Field
                  as={TextField}
                  id="name"
                  variant="filled"
                  required
                  style={inputStyle}
                  label="NAME"
                  name="name"
                />

                {/* EMail input */}
                <Field
                  as={TextField}
                  id="email"
                  variant="filled"
                  required
                  style={inputStyle}
                  label="EMAIL ADDRESS"
                  name="email"
                  helperText={<ErrorMessage name="email" />}
                />

                {/* Password input */}
                <Field
                  as={TextField}
                  id="pwd"
                  variant="filled"
                  required
                  type="password"
                  style={inputStyle}
                  label="PASSWORD"
                  name="password"
                  helperText={<ErrorMessage name="password" />}
                />

                {/* Password confirmation input */}
                <Field
                  as={TextField}
                  id="confirmPwd"
                  variant="filled"
                  required
                  type="password"
                  style={inputStyle}
                  label="CONFIRM PASSWORD"
                  name="confirmPassword"
                  helperText={<ErrorMessage name="confirmPassword" />}
                />

                {/* Blog update Checkbox */}
                <FormControlLabel
                  control={
                    <Field as={Checkbox} name="blogUpdate" color="primary" />
                  }
                  label="I want to receive updates about products and promotions"
                />

                {/* Product update Checkbox */}
                <FormControlLabel
                  control={
                    <Field as={Checkbox} name="productUpdate" color="primary" />
                  }
                  label="I want to receive updates about products and promotions"
                />

                {/* sign up button */}
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={btnstyle}
                  disabled={isLoading}
                >
                  SIGN UP
                </Button>
                {error && <div className="">{error}</div>}
              </Form>
            )}
          </Formik>

          {/* Create account Link */}
          <Typography>
            {" "}
            Already have an Account?
            <Link href="#" onClick={() => handleChange("event", 0)}>
              SIGN IN
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default SignupForm;
