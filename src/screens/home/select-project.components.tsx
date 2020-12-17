import PCheckList from '@/components/PCheckList';
import PSubmitButton from '@/components/PSubmitButton';
import { pBackgroundImageStyles } from '@/styles/background-image';
import { pFontStyles } from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import { useRoute } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProject } from '@/actions';
import { RootReducerProps } from '@/reducers';

export const SelectProject = ({ navigation, project, dispatch }: any) => {

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
                value={project.value}
                onChange={(e: any) => {
                  let item = checkList.find(item => item.value == e);
                  dispatch.updateProject(item);
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

const mapStateToProps = (state: RootReducerProps) => {
  return {
    project: state.projectReducer,
  }
}

const mapDispatchToProps = (dispatch: any)=> {
  return {
    dispatch: bindActionCreators({ updateProject }, dispatch)
  }
}

export const SelectProjectScreen: any = connect(mapStateToProps, mapDispatchToProps)(SelectProject);