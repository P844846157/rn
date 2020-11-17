import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, Input, InputProps } from 'react-native-elements';
import pxToDp from '@utils/pxToDp';

interface coustomProp {
  label: string;
  leftIconName: string;
}

const PInput = (props: InputProps) => {

  const onFoucs = () => {
    console.log(123);
  };

  return (
    <View>
      <Input
        {...props}
        labelStyle={[styles.label, props.labelStyle]}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        onFocus={onFoucs}></Input>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    height: 40,
    paddingHorizontal: pxToDp(20),
  },
  label: {
    fontWeight: 'normal',
    color: colors.grey3,
    marginBottom: pxToDp(10),
  },
  input: {
    fontSize: pxToDp(28),
  },
});

export default PInput;
