import React, { FormEvent } from 'react';
import { Formik } from 'formik';
import { View, TextInput, Button } from 'react-native';
export const Profile = () => {
  return (
    <Formik
      initialValues={{
        name: ''
      }}
      onSubmit={values => {
        alert('Welcome, ' + values.name)
      }}
    >
      {props => (
        <View style={{ justifyContent: 'space-between' }}>
          <TextInput
            onChangeText={props.handleChange('name')}
            onBlur={props.handleBlur('name')}
            value={props.values.name}
            placeholder='Your name'
          />
          <Button onPress={e => props.handleSubmit(e as any)} title="Submit" />
        </View>
      )}
    </Formik>
  )
};

export default Profile;
