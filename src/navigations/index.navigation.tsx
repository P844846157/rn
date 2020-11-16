import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import materialBottomTabScreen from './bottomTab.navigation';
import HomeStackScreen from './home.navagation';
import AuthStackScreen from './auth.navigation';
import MineStackScreen from './mine.navagation';

export type AppNavigatorParams = {
  BottomTab: undefined;
  HomeLayout: undefined;
  MineLayout: undefined;
  AuthLayout: undefined;
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {},
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="BottomTab"
          component={materialBottomTabScreen}></Stack.Screen>
        <Stack.Screen
          name="HomeLayout"
          component={HomeStackScreen}></Stack.Screen>
        <Stack.Screen
          name="MineLayout"
          component={MineStackScreen}></Stack.Screen>
        <Stack.Screen
          name="AuthLayout"
          component={AuthStackScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
