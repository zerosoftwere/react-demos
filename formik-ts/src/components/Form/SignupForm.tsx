import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { OnSignup, SignupFormType } from '../../types';

import classes from './SignupForm.module.css';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().min(6).required(),
});

const SignupForm: React.FC<{
  onSignup: OnSignup;
}> = (props) => {
  const initialValues: SignupFormType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <section className={classes.form}>
      <h1>Signup Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(value) => {
          props.onSignup(value);
        }}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => (
          <Form>
            <div className={classes.formControl}>
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                className={
                  touched.firstName
                    ? errors.firstName
                      ? classes.invalid
                      : classes.valid
                    : ''
                }
              />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                className={
                  touched.lastName
                    ? errors.lastName
                      ? classes.invalid
                      : classes.valid
                    : ''
                }
              />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={
                  touched.email
                    ? errors.email
                      ? classes.invalid
                      : classes.valid
                    : ''
                }
              />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  touched.password
                    ? errors.password
                      ? classes.invalid
                      : classes.valid
                    : ''
                }
              />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  touched.confirmPassword
                    ? errors.confirmPassword
                      ? classes.invalid
                      : classes.valid
                    : ''
                }
              />
            </div>

            <button type="submit">Signup</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignupForm;
