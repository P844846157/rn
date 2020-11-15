import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler, Button, Text } from 'react-native';


const HomeScreen = ({ navigation }: any) => {



    const goForm = () => {
        navigation.navigate('LoginLayout', { screen: 'login' });
    }

    return (
        <>
            <Text>HomeScreen</Text>
            <Button title='跳转页面' onPress={() => { goForm() }}></Button>
        </>
    )
}

export default HomeScreen;