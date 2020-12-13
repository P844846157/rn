import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, View, TouchableWithoutFeedback, ImageBackground, Pressable, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import PInput from '@components/PInput';
import pxToDp from '@utils/pxToDp';
import { pColorStyles } from '@/styles/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pBackgroundImageStyles } from '@/styles/background-image';

export const SignInScreen = ({ navigation }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  // 密码框右侧图标
  const passwrodRightIcon = (
    passwordVisible ?
      <Pressable onPress={() => setPasswordVisible(false)}>
        <Ionicons color={pColorStyles.themeColor.color} size={pxToDp(48)} name="eye-outline"></Ionicons>
      </Pressable>
      :
      <Pressable onPress={() => setPasswordVisible(true)}>
        <Ionicons color={pColorStyles.themeColor.color} size={pxToDp(48)} name="eye-off-outline"></Ionicons>
      </Pressable>
  );

  const goHome = () => {
    navigation.navigate('HomeLayout', { screen: 'Home' });
  };

  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle="dark-content" />
      <ImageBackground source={require('../../assets/images/img_welcome_backgrounnd.png')} style={pBackgroundImageStyles.fullBg}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.main}>
              <View>
                <Text style={[styles.title, styles.fz28]}>Welcome to</Text>
                <Text style={styles.title}>URA DWSSP</Text>
              </View>
              <View>
                <PInput label="Email address/Phone no."></PInput>
                <PInput secureTextEntry={passwordVisible} label="Password" rightIcon={passwrodRightIcon}></PInput>
                <Text style={[pColorStyles.themeColor, styles.forgot]}>Forgot Password ?</Text>
              </View>
              <Button title='Sign In' onPress={goHome}></Button>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: pxToDp(16),
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: pxToDp(70),
    color: '#000',
    fontWeight: 'bold',
  },
  fz28: {
    fontSize: pxToDp(56),
  },
  forgot: {
    textAlign: 'right',
    fontSize: pxToDp(24),
    marginTop: pxToDp(10)
  }
});
