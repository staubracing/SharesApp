import * as yup from 'yup';

const emailValidator = yup
  .string()
  .email('Please enter valid email')
  .required('Email Address is Required');

const passwordValidator = yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .max(20, ({ max }) => `Password must be at most ${max} characters`)
  .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/\d/, 'Password must contain at least one number')
  .matches(/[@$!%*#?&]/, 'Password must contain at least one symbol')
  .required('Password is required');

const codeValidator = yup.string().required('Confirmation Code is required');

/**
 * Defines the validation schema for email input.
 */
export const emailValidationSchema = yup.object().shape({
  email: emailValidator,
});

/**
 * Defines the validation schema for the username field.
 */
export const usernameValidationSchema = yup.object().shape({
  username: emailValidator,
});

/**
 * Defines the login validation schema.
 */
export const loginValidationSchema = yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

/**
 * Defines the validation schema for a new user(SignUp screen).
 */
export const newUserValidationSchema = yup.object().shape({
  username: emailValidator,
  password: passwordValidator,
});

/**
 * Defines the validation schema for a new user(SignUp screen - confirm code).
 */
export const confirmationCodeValidationSchema = yup.object().shape({
  username: emailValidator,
  code: codeValidator,
});

/**
 * Validation schema for forgot password form (new_pasword Forgot Password Screen send code with password).
 */
export const forgotPasswordValidationSchema = yup.object().shape({
  username: emailValidator,
  new_password: passwordValidator,
  code: codeValidator,
});
