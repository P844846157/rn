
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from '../screens/home/form';
import FormDetailScreen from '../screens/home/form/detail';


const Stack = createStackNavigator();

const HomeStackScreen = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="FormDetail" component={FormDetailScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackScreen;