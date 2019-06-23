import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationScreenProp } from "react-navigation";
import Profile from './screens/Profile';
import { useScreens } from 'react-native-screens';

useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'rgb(150, 150, 250)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  }
});

interface ImageData {
  title: string;
  subtitle: string;
  url: any;
}
const dedsec1 = require('./assets/images/dedsec.jpg');
const dedsec2 = require('./assets/images/dedsec2.jpg');
const dedsec3 = require('./assets/images/dedsec3.jpg');

const mockData: ImageData[] = [
  { title: 'DedSec', subtitle: 'Code and donuts', url: dedsec1 },
  { title: 'DedSec2', subtitle: 'Greyhats wear colours', url: dedsec2 },
  { title: 'Developers', subtitle: 'Code rules everything around us', url: dedsec3 }
];

interface AppProps {
  navigation: NavigationScreenProp<any, any>
}
const App = ({ navigation }: AppProps) => {
  const [scroll, setScroll] = useState<ScrollView>(null);

  useEffect(() => {
    scroll && scroll.scrollToEnd({ animated: true });

  }, [scroll]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>This is who we are...</Text>
        <ScrollView
          horizontal
          ref={r => setScroll(r)}
        >
          {mockData.map((v, i) => <Image key={`${i}-${v.title}`} testID={`${i}-${v.title}`} resizeMode="contain" style={{
            height: 250,
            width: 300
          }} source={v.url} />)}
        </ScrollView>

      </View>

      <Button color="#55C" title="Enter" onPress={e => { navigation.navigate('Profile') }} />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Start: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    title: 'About You',

  }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#77E',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default createAppContainer(AppNavigator);