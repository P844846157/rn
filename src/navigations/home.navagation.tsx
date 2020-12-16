import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SelectProjectScreen} from '@/screens/home';
import {Image, Pressable} from 'react-native';
import pxToDp from '@/utils/pxToDp';

const Stack = createStackNavigator();

const screenOptions = {
  headerTransparent: true,
  headerRightContainerStyle: {
    paddingRight: pxToDp(32),
  },
  headerLeftContainerStyle: {
    paddingLeft: pxToDp(32),
  },
};

const HomeStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerRight: () => (
            <Pressable>
              <Image
                source={require('../assets/images/icons/icon_settings.png')}></Image>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="SelectProject"
        component={SelectProjectScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/images/icons/icon_close.png')}></Image>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
