import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Text } from 'react-native-elements';
import PInput from '@components/PInput';
import pxToDp from '@utils/pxToDp';
import storage from '@utils/stroage';

export const SignInScreen = () => {

  const saveStroage = () => {

    storage.save({
      key: 'user', // 注意:请不要在key中使用_下划线符号!
      id: '1001', // 注意:请不要在id中使用_下划线符号!
      data: {
        a: 1
      },
      expires: null,
    });

    storage.load({
      key: 'user',
      id: '1001',
    }).then(res => {
      console.log(res);
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <Text h4>
            Welcome to URA DWSS1
          </Text>
          <View>
            <PInput leftIcon={
              <FontAwesomeIcon name='user-o' size={16}></FontAwesomeIcon>
            } label="welcome"></PInput>
          </View>
          <Button onPress={saveStroage} title='提交'></Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pxToDp(40),
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
