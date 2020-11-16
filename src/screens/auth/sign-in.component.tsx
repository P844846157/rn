import React from 'react';
import {Keyboard, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PInput from '../../components/PInput';
import pxToDp from '../../utils/pxToDp';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <Text h4 style={{fontSize: pxToDp(24)}}>
            Welcome to URA DWSS1
          </Text>
          <View>
            <PInput></PInput>
          </View>
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
    // flex: 1,
    justifyContent: 'space-around',
  },
});

// export default KeyboardAvoidingComponent;
