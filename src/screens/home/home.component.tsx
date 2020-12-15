import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskSwiper from './components/TaskSwiper.component';
import { pBackgroundImageStyles } from '@/styles/background-image';
import { pColorStyles } from '@/styles/color';
import { pFontStyles } from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import TaskPie from './components/TaskPie.component';
import { useHeaderHeight } from '@react-navigation/stack';
import FormLibrary from './components/FormLibrary.component';



export const HomeScreen = ({ navigation }: any) => {
  const goSignIn = () => {
    navigation.navigate('AuthLayout', { screen: 'SignIn' });
  };

  const headerHeight = useHeaderHeight();

  return (
    <ImageBackground
      source={require('../../assets/images/home/img_landing_background.png')}
      style={pBackgroundImageStyles.fullBg}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.containter, { marginTop: pxToDp(headerHeight) }]}>
          <View style={styles.pdHor}>
            <Text style={pColorStyles.grey}>Welcome back to</Text>
            <Pressable style={styles.projectBox}>
              <Text style={[pFontStyles.weightBold, styles.project]}>
                J3668-Development Project{' '}
              </Text>
              <Image
                source={require('../../assets/images/icons/icon_drop_down.png')}></Image>
            </Pressable>
          </View>
          <View style={styles.pdHor}>
            <TaskSwiper></TaskSwiper>
          </View>
          <View style={[styles.taskPie, styles.pdHor]}>
            <Text style={[styles.title, pFontStyles.weightBold]}>My Tasks</Text>
            <TaskPie></TaskPie>
          </View>
          <View style={{ paddingLeft: pxToDp(32) }}>
            <Text style={[styles.title, pFontStyles.weightBold]}>Form Library</Text>
            <FormLibrary></FormLibrary>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containter: {
    paddingVertical: pxToDp(16),
  },
  pdHor: {
    paddingHorizontal: pxToDp(32),
  },
  title: {
    fontSize: pxToDp(34),
    marginBottom: pxToDp(24),
  },
  projectBox: {
    marginTop: pxToDp(14),
    paddingBottom: pxToDp(38),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DFE8F0',
  },
  project: {
    fontSize: pxToDp(36),
  },
  taskPie: {
    marginBottom: pxToDp(40)
  },
});
