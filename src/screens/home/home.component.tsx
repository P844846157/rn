import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {BackHandler, Button, Text} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  const goSignIn = () => {
    navigation.navigate('AuthLayout', {screen: 'SignIn'});
  };

  return (
    <>
      <Text>HomeScreen</Text>
      <Button title="跳转页面" onPress={goSignIn}></Button>
    </>
  );
};
