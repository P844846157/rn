import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import {SignInScreen} from '@screens/auth';
import {RouteProp} from '@react-navigation/native';
import {AppNavigatorParams} from './index.navigation';

type AuthNavigatorParams = AppNavigatorParams & {
  SignIn: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, 'SignIn'>;
  route: RouteProp<AuthNavigatorParams, 'SignIn'>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

const AuthStackScreen = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {},
        gestureEnabled: true, 
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackScreen;
