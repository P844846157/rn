import PCheckList from '@/components/PCheckList';
import {pBackgroundImageStyles} from '@/styles/background-image';
import {pColorStyles} from '@/styles/color';
import {pFontStyles} from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import {useHeaderHeight} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SelectProjectScreen = ({navigation}: any) => {
  const checkList = [
    {label: 'J3668-Development Project', value: '1'},
    {
      label: 'Kwun Tong Town Centre Project',
      value: '2',
    },
    {
      label: 'Sai Wan Ho Street Project',
      value: '3',
    },
  ];
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/images/img_welcome_backgrounnd.png')}
        style={pBackgroundImageStyles.fullBg}>
        <View style={[styles.containter, {marginTop: pxToDp(headerHeight)}]}>
          <View>
            <Text style={[styles.title, pFontStyles.weightBold]}>
              Select Project
            </Text>
            <Text>Please select a project</Text>
            <View style={styles.list}>
              <PCheckList
                options={checkList}
                value="2"
                onChange={(e: any) => {
                  console.log(e);
                }}></PCheckList>
            </View>
          </View>
          <Button buttonStyle={styles.confrim} title="Confirm"></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: pxToDp(160),
    paddingBottom: pxToDp(30),
    paddingHorizontal: pxToDp(32),
  },
  title: {
    fontSize: pxToDp(56),
    marginBottom: pxToDp(24),
  },
  list: {
    marginTop: pxToDp(100),
  },
  confrim: {
    backgroundColor: pColorStyles.themeColor1.color,
    height: pxToDp(100),
  },
});
