
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/login';


const Stack = createStackNavigator();

const LoginStackScreen = () => { 
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default LoginStackScreen;