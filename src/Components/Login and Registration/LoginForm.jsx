/* eslint-disable no-unused-vars */
import React from "react";
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = ({ handleChange }) => {
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
    background: "rgba(217, 217, 217, 0.18.)",
  };

  // Button style
  const btnstyle = {};

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const { login, error, isLoading } = useLogin();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  // Functions
  // submission
  const onSubmit = async (values, props) => {
    console.log(values);
    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 2000);
    await login(values.email, values.password);
    await props.resetForm();
  };

  return (
    <>
      <Grid align="center">
        <Paper elevation={-0} style={paperStyle}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                {/* EMail input */}
                <Field
                  as={TextField}
                  variant="filled"
                  placeholder="Enter Email"
                  required
                  style={inputStyle}
                  label="Email"
                  name="email"
                  helperText={<ErrorMessage name="email" />}
                />

                {/* Password input */}
                <Field
                  as={TextField}
                  variant="filled"
                  placeholder="Enter Password"
                  required
                  type="password"
                  name="password"
                  style={inputStyle}
                  label="Password"
                  helperText={<ErrorMessage name="password" />}
                />

                {/* Remember password Checkbox */}
                <Field
                  as={FormControlLabel}
                  control={<Checkbox name="remember" color="primary" />}
                  label="Remember My Password"
                />
                <button type="submit" style={btnstyle} disabled={isLoading}>
                  SIGN IN
                </button>
                {error && (
                  <div className="text-xs text-[#000] bg-red-200">{error}</div>
                )}
              </Form>
            )}
          </Formik>

          {/* Create account Link */}
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              CREATE AN ACCOUNT
            </Link>
          </Typography>
          {/* Forgot password link */}
          <Typography>
            <Link href="#" onClick={() => handleChange("event", 2)}>
              Forgot password ?
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default LoginForm;
