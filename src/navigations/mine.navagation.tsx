
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SettingsScreen from '../screens/mine/settings';
import LauguageScreen from '../screens/mine/settings/language';
import I18n from '../i18n';

const Stack = createStackNavigator();


const MineStackScreen = ({ navigation }: any) => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {},
            gestureEnabled: true,
            ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{
                title: I18n.t('setting')
            }} />
            <Stack.Screen name="Language" component={LauguageScreen} options={{
                title: I18n.t('setLanguage'),
                headerTitleAlign: 'center',
            }} />
        </Stack.Navigator>
    )
}

export default MineStackScreen;