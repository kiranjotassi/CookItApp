import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const LoginSchema = yup.object({
  email: yup
    .string()
    .required()
    .min(12),
  password: yup
    .string()
    .required()
    .min(8),
});

export default function Login() {
  const [user, setUser] = useState([]);
  const addUser = user => {
    user.key = Math.random().toString();
    setUser(currentUser => {
      return [user, ...currentUser];
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('C:\\Users\\kiran\\IdeaProjects\\FinalProject2_0\\assets\\logo.png')}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addUser(values);
        }}>
        {props => (
          <TouchableWithoutFeedback>
            <View>
              <TextInput
                keyboardType="email-address"
                style={styles.input}
                placeholder="Email"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={props.handleChange('password')}
                secureTextEntry
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Text style={styles.errorText}>{props.touched.email && props.errors.password}</Text>
              <Button
                title="submit"
                color="maroon"
                onPress={props.handleSubmit}
              />
              <Text style={styles.done}>You are now logged in!</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginRight: 10,
    marginLeft: 10,
  },
  imageStyle: {
    marginTop: 100,
    marginBottom: 150,
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  },
  done: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
