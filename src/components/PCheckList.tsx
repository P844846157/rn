import React, {useEffect, useState} from 'react';
import pxToDp from '@/utils/pxToDp';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onChange, Value} from 'react-native-reanimated';

interface optionsProps {
  label: string;
  value: any;
  [x: string]: any;
}

interface PcheckListProps {
  options: optionsProps[];
  value?: any;
  onChange?: Function;
}

const PCheckList = (props: PcheckListProps) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value]);

  useEffect(() => {
    const item = props.options.find((item) => item.value === value);
    if(item?.value == value) return;
    setValue(item?.value || null);
  }, []);

  return (
    <View>
      {props.options.map((item) => (
        <Pressable
          key={item.value}
          style={styles.item}
          onPress={() => setValue(item.value)}>
          <Text style={styles.label}>
            {item.label}
          </Text>

          {item.value == value ? (
            <Image
              source={require('../assets/images/checkbox/icon_Tick.png')}></Image>
          ) : (
            <Image
              source={require('../assets/images/checkbox/icon_selection_box.png')}></Image>
          )}
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: pxToDp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pxToDp(30),
    paddingVertical: pxToDp(30),
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  label: {},
});

export default PCheckList;
