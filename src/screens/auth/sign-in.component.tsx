import React, {useContext, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import PInput from '@components/PInput';
import pxToDp from '@utils/pxToDp';
import {pColorStyles} from '@/styles/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {pBackgroundImageStyles} from '@/styles/background-image';
import {WToast} from 'react-native-smart-tip';
import {pButtonStyles} from '@/styles/button';
import {AuthContext} from '@/provider/auth.provider';

interface Form {
  phone?: string;
  password?: string;
}

export const SignInScreen = (props: any) => {
  const [form, setForm] = useState<Form>({});
  const [valid, setValid] = useState<Boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {signIn} = useContext(AuthContext);
  
  const formRules = [
    {name: 'phone', rules: [{required: true, message: '请输入账号'}]},
    {name: 'password', rules: [{required: true, message: '请输入密码'}]},
  ];

  useEffect(() => {
    const v = Boolean(form.phone && form.password);
    setValid(v);
  }, [form]);

  const sign = async () => {
    if (form.phone != 'DWSSP' && form.password != 'DWSSP') {
      WToast.show({
        data: 'username or password is wrong',
        position: WToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
      });
    } else {
      await signIn(form);
      goHome();
    }
  };

  const goHome = () => {
    props.navigation.navigate('HomeLayout', {screen: 'Home'});
  };

  // 密码框右侧图标
  const passwrodRightIcon = passwordVisible ? (
    <Pressable onPress={() => setPasswordVisible(false)}>
      <Ionicons
        color={pColorStyles.themeColor.color}
        size={pxToDp(48)}
        name="eye-outline"></Ionicons>
    </Pressable>
  ) : (
    <Pressable onPress={() => setPasswordVisible(true)}>
      <Ionicons
        color={pColorStyles.themeColor.color}
        size={pxToDp(48)}
        name="eye-off-outline"></Ionicons>
    </Pressable>
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../assets/images/img_welcome_backgrounnd.png')}
        style={pBackgroundImageStyles.fullBg}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.main}>
              <View>
                <Text style={[styles.title, styles.fz28]}>Welcome to</Text>
                <Text style={styles.title}>URA DWSSP</Text>
              </View>
              <View>
                <PInput
                  label="Email address/Phone no."
                  value={form.phone}
                  onChangeText={(phone: string) =>
                    setForm(Object.assign({}, form, {phone}))
                  }></PInput>
                <PInput
                  secureTextEntry={passwordVisible}
                  label="Password"
                  keyboardType={Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'}
                  value={form.password}
                  onChangeText={(password: string) =>
                    setForm(Object.assign({}, form, {password}))
                  }
                  rightIcon={passwrodRightIcon}></PInput>
                <Text style={[pColorStyles.themeColor, styles.forgot]}>
                  Forgot Password ?
                </Text>
              </View>
              <Button
                disabled={!valid}
                disabledStyle={pButtonStyles.disabledSubmit}
                disabledTitleStyle={pColorStyles.white}
                titleStyle={pColorStyles.white}
                title="Sign In"
                onPress={sign}></Button>
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
    marginTop: pxToDp(10),
  },
});
