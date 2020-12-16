import PCheckList from '@/components/PCheckList';
import PSubmitButton from '@/components/PSubmitButton';
import { ProjectReducer, projectState, SET_PROJECT } from '@/reducer/project.reducer';
import { pBackgroundImageStyles } from '@/styles/background-image';
import { pButtonStyles } from '@/styles/button';
import { pColorStyles } from '@/styles/color';
import { pFontStyles } from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';
import React, { useReducer, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SelectProjectScreen = ({ navigation }: any) => {
  const route: any = useRoute();
  const [projectId, setProjectId] = useState(route.params.projectId);

  const checkList = [
    { label: 'J3668-Development Project', value: '1' },
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

  const comfrim = async () => {

    // await global.stroage.save({
    //   key: 'project',
    //   data: current,
    //   expires: null,
    // });
    navigation.goBack();
  }

  return (

    <ImageBackground
      source={require('../../assets/images/img_welcome_backgrounnd.png')}
      style={pBackgroundImageStyles.fullBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.containter, { marginTop: pxToDp(headerHeight) }]}>
          <View>
            <Text style={[styles.title, pFontStyles.weightBold]}>
              Select Project
            </Text>
            <Text>Please select a project</Text>
            <View style={styles.list}>
              <PCheckList
                options={checkList}
                value={projectId}
                onChange={(e: any) => {
                 
                }}></PCheckList>
            </View>
          </View>
          <PSubmitButton title="Confirm" onPress={comfrim}></PSubmitButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
});
