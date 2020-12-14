import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TaskSwiper from './components/TaskSwiper.component';
import {pBackgroundImageStyles} from '@/styles/background-image';
import {pColorStyles} from '@/styles/color';
import {pFontStyles} from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import TaskPie from './components/TaskPie.component';

export const HomeScreen = ({navigation}: any) => {
  const goSignIn = () => {
    navigation.navigate('AuthLayout', {screen: 'SignIn'});
  };

  return (
    <ImageBackground
      source={require('../../assets/images/home/img_landing_background.png')}
      style={pBackgroundImageStyles.fullBg}>
      <SafeAreaView style={styles.containter}>
        <View>
          <Pressable style={styles.setting}>
            <Image
              source={require('../../assets/images/icons/icon_settings.png')}></Image>
          </Pressable>
          <View>
            <Text style={pColorStyles.grey}>Welcome back to</Text>
            <Pressable style={styles.projectBox} onPress={goSignIn}>
              <Text style={[pFontStyles.weightBold, styles.project]}>
                J3668-Development Project{' '}
              </Text>
              <Image
                source={require('../../assets/images/icons/icon_drop_down.png')}></Image>
            </Pressable>
          </View>
        </View>
        <View style={styles.taskSwiper}>
          <TaskSwiper></TaskSwiper>
        </View>
        <View>
          <Text style={[styles.title, pFontStyles.weightBold]}>My Tasks</Text>
          <TaskPie></TaskPie>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: pxToDp(34),
    marginBottom: pxToDp(24),
  },
  containter: {
    paddingVertical: pxToDp(16),
    paddingHorizontal: pxToDp(32),
  },
  setting: {
    alignItems: 'flex-end',
    marginBottom: pxToDp(20),
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
  taskSwiper: {},
});
