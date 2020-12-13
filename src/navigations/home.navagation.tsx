
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/screens/home';


const Stack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="FormDetail" component={FormDetailScreen} /> */}
        </Stack.Navigator>
    )
}

export default HomeStackScreen;