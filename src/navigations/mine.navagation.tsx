
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/mine/settings';
import I18n from '../i18n';
const Stack = createStackNavigator();


const MineStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{
                title: I18n.t('setting')
            }} />
        </Stack.Navigator>
    )
}

export default MineStackScreen;