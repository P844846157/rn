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
import React, { useEffect, useState } from 'react';
import Navigation from './navigations/index.navigation';
import { useBackButton } from '@react-navigation/native';
import { BackHandler, Platform } from 'react-native'; 

const App = (props: any) => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
