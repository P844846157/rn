
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const HomeStackScreen = () => { 
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="FormDetail" component={FormDetailScreen} /> */}
        </Stack.Navigator>
    )
}

export default HomeStackScreen;