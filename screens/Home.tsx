import React, { useContext } from 'react';
import { Text } from 'react-native';
import { AppContext } from '../App.context';

export const Home = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Text>Hello {appContext.name}</Text>
    </>
  );
};

export default Home;
