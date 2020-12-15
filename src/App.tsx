/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Navigation from './navigations/index.navigation';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-navigation';

import '@utils/stroage.ts';

const App = (props: any) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Navigation />
    </>
  );
};

export default App;
