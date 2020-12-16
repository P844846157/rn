import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TaskSwiper from './components/TaskSwiper.component';
import {pBackgroundImageStyles} from '@/styles/background-image';
import {pColorStyles} from '@/styles/color';
import {pFontStyles} from '@/styles/font';
import pxToDp from '@/utils/pxToDp';
import {getUserInfo} from '@/utils/userInfo';
import TaskPie from './components/TaskPie.component';
import {useHeaderHeight} from '@react-navigation/stack';
import FormLibrary from './components/FormLibrary.component';
import {AuthContext} from '@/provider/auth.provider';

export const HomeScreen = ({navigation}: any) => {
  // 顶部高度
  const headerHeight = useHeaderHeight();
  const [userInfo, setUserInfo] = useState<any>({});
  const {signOut} = useContext(AuthContext);

  useEffect(() => {
    const initData = async () => {
      try {
        const u = await getUserInfo();
        setUserInfo(u);
      } catch (e) {}
    };
    initData();
  }, []);

  const goSignIn = async () => {
    navigation.push('HomeLayout', {screen: 'SelectProject'});
  };

  return (
    <>
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <SafeAreaView>
        <ImageBackground
          source={require('../../assets/images/home/img_landing_background.png')}
          style={pBackgroundImageStyles.fullBg}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.containter, {marginTop: pxToDp(headerHeight)}]}>
            <View style={styles.pdHor}>
              <Text style={pColorStyles.grey}>
                Welcome back to {userInfo.phone}
              </Text>
              <Pressable style={styles.projectBox} onPress={goSignIn}>
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
              <Text style={[styles.title, pFontStyles.weightBold]}>
                My Tasks
              </Text>
              <TaskPie></TaskPie>
            </View>
            <View style={styles.formLibrary}>
              <Text style={[styles.title, pFontStyles.weightBold]}>
                Form Library
              </Text>
              <FormLibrary></FormLibrary>
            </View>
          </ScrollView>
          <View style={styles.fixed}>
            <Image
              source={require('../../assets/images/icons/icon_add.png')}></Image>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
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
    marginBottom: pxToDp(40),
  },
  formLibrary: {
    paddingLeft: pxToDp(32),
    paddingBottom: pxToDp(100),
  },
  fixed: {
    width: pxToDp(120),
    height: pxToDp(120),
    position: 'absolute',
    right: pxToDp(32),
    bottom: pxToDp(68),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: pColorStyles.themeColor1.color,
    borderRadius: pxToDp(120),
  },
});
