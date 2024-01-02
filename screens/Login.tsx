import { Button, TextInput, Text } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Auth } from '@aws-amplify/auth';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  //create login function using the signIn function from AuthService
  const login = async (values: LoginFormValues) => {
    const { email, password } = values;
    try {
      await Auth.signIn({ username: email, password: password });
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  const intialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .max(20, ({ max }) => `Password must be at most ${max} characters`)
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*#?&]/, 'Password must contain at least one symbol')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => login(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <>
          <TextInput
            label="Email"
            mode="outlined"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.textInput}
          />
          {errors.email && touched.email && (
            <Text style={styles.errorTextStyle}>{errors.email}</Text>
          )}
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.textInput}
          />
          {errors.password && touched.password && (
            <Text style={styles.errorTextStyle}>{errors.password}</Text>
          )}
          <Button onPress={() => handleSubmit()}>Submit</Button>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  errorTextStyle: {
    fontSize: 10,
    color: 'red',
  },
});

export default LoginForm;
