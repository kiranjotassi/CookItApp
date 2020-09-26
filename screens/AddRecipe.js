import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Modal, AsyncStorageStatic as AsyncStorage,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';
import CameraOpen from './camera';

const RecipeSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  description: yup
    .string()
    .required()
    .min(4),
  ingredients: yup
    .string()
    .required()
    .min(4),
  steps: yup
    .string()
    .required()
    .min(4),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Invalid Rating', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function AddRecipe({addRecipe}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View>
      <Formik
        initialValues={{
          title: '',
          rating: '',
          description: '',
          ingredients: '',
          steps: '',
        }}
        validationSchema={RecipeSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addRecipe(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Recipe Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Recipe Description"
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              onBlur={props.handleBlur('description')}
            />
            <Text style={styles.errorText}>
              {props.touched.description && props.errors.description}
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Recipe Ingredients"
              onChangeText={props.handleChange('ingredients')}
              value={props.values.ingredients}
              onBlur={props.handleBlur('ingredients')}
            />
            <Text style={styles.errorText}>
              {props.touched.ingredients && props.errors.ingredients}
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Recipe Steps"
              onChangeText={props.handleChange('steps')}
              value={props.values.steps}
              onBlur={props.handleBlur('steps')}
            />
            <Text style={styles.errorText}>
              {props.touched.steps && props.errors.steps}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={styles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <Modal visible={modalOpen} animationType="slide">
              <TouchableWithoutFeedback
                style={styles.button}
                onPress={Keyboard.dismiss}>
                <View>
                  <FlatButton onPress={() => setModalOpen(false)} text="X" />
                </View>
              </TouchableWithoutFeedback>
              <CameraOpen />
            </Modal>

            <FlatButton onPress={() => setModalOpen(true)} text="+ Add Photo" />

            <View style={{marginTop: 5}}>
              <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
          </View>
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
    marginLeft: 10,
    marginRight: 10,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});
