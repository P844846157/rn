import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Input} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import pxToDp from '../utils/pxToDp';

interface coustomProp {
  label: string;
  leftIconName: string;
}

const PInput = (props: any) => {
  const onFoucs = () => {
    console.log(123);
  };

  return (
    <View>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <View style={styles.inputBox}>
        {props.leftIconName ? (
          <Ionicons name={props.leftIconName}></Ionicons>
        ) : null}
        <TextInput
          {...props}
          style={styles.input}
          onFocus={onFoucs}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    paddingVertical: pxToDp(10),
    paddingHorizontal: pxToDp(20),
    borderColor: '#CCC',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: pxToDp(10),
  },
  input: {
    padding: 0,
    flex: 1,
  },
});

export default PInput;
