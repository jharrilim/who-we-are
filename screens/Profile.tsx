import React, { useContext } from 'react';
import { Formik } from 'formik';
import { View, TextInput, Button } from 'react-native';
import { AppContext } from '../App.context';
import { NavigationScreenProp, createNavigator } from 'react-navigation';

interface AppProps {
  navigation: NavigationScreenProp<any, any>
}

export const Profile = ({ navigation }: AppProps) => {
  const appContext = useContext(AppContext);

  return (
    <Formik
      initialValues={{
        name: ''
      }}
      onSubmit={values => {
        appContext.name = values.name;
        navigation && navigation.navigate('Home');
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
