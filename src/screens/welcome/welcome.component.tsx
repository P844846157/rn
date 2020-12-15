import {pBackgroundImageStyles} from '@/styles/background-image';
import pxToDp from '@/utils/pxToDp';
import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

export const WelcomeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/img_welcome_backgrounnd.png')}
      style={[pBackgroundImageStyles.fullBg, styles.bg]}>
      <Image
        style={styles.image}
        source={require('../../assets/images/img_URA_logo.png')}></Image>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: pxToDp(410),
    height: pxToDp(224),
  },
});
