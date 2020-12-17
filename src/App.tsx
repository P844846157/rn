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
import React, { useEffect } from 'react';
import Navigation from './navigations/index.navigation';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import stores from "@/stores";

import '@utils/stroage.ts';

const App = (props: any) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={stores}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Navigation />
    </Provider>
  );
};

export default App;
