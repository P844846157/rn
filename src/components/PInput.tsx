import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, Input, InputProps } from 'react-native-elements';
import pxToDp from '@utils/pxToDp';

interface coustomProp {
  label: string;
  leftIconName: string;
}

const PInput = (props: InputProps) => {
  const [focuFlag, setFocuFlag] = useState(false);
  const onFoucs = () => {
    setFocuFlag(true);
  };
  const onBlur = () => {
    setFocuFlag(false);
  };
  return (
    <View>
      <Input
        {...props}
        labelStyle={[styles.label, props.labelStyle]}
        inputContainerStyle={[styles.inputContainer, focuFlag ? styles.inputContainerActive : null]}
        inputStyle={styles.input}
        onFocus={onFoucs}
        onBlur={onBlur}
      ></Input>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: pxToDp(12),
    height: pxToDp(80),
    paddingHorizontal: pxToDp(20),
  },
  inputContainerActive: {
    borderColor: '#0063A3'
  },
  label: {
    fontSize: pxToDp(32),
    fontWeight: 'normal',
    color: '#656565',
    marginBottom: pxToDp(10),
  },
  input: {
    fontSize: pxToDp(28),
  },
});

export default PInput;
