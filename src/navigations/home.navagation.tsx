
import React from 'react';
import { createStackNavigator, StackHeaderProps, StackScreenProps } from '@react-navigation/stack';
import { HomeScreen } from '@/screens/home';
import { Image, Pressable, View } from 'react-native';
import pxToDp from '@/utils/pxToDp';

const Stack = createStackNavigator();

const HomeStackScreen = ({ navigation }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: '',
                headerTransparent: true,
                headerRightContainerStyle: {
                    paddingRight: pxToDp(32)
                },
                headerRight: (props) => (
                    <Pressable onPress={() => navigation.push('AuthLayout', { screen: 'SignIn' })}>
                        <Image
                            source={require('../assets/images/icons/icon_settings.png')}></Image>
                    </Pressable>
                )
            }} />
            {/* <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="FormDetail" component={FormDetailScreen} /> */}
        </Stack.Navigator>
    )
}

export default HomeStackScreen;