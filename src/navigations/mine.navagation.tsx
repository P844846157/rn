import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import I18n from '../i18n';
import {SetLauguageScreen, SettingScreen} from '../screens/setting';

const Stack = createStackNavigator();

const MineStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {},
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: I18n.t('setting'),
        }}
      />
      <Stack.Screen
        name="Language"
        component={SetLauguageScreen}
        options={{
          title: I18n.t('setLanguage'),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default MineStackScreen;
