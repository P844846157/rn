import React from 'react';
import {pColorStyles} from '@/styles/color';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import pxToDp from '@/utils/pxToDp';

const TaskSwiper = () => {
  return (
    <View style={styles.swiperBox}>
      <Swiper
        removeClippedSubviews={false}
        height={pxToDp(220)}
        showsButtons={false}
        loop={true}
        autoplay={false}
        horizontal={true}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        paginationStyle={styles.pagination}>
        <View style={styles.slide}>
          <View style={styles.taskTitle}>
            <Image
              style={styles.taskTitleIcon}
              source={require('../../../assets/images/icons/icon_new_task.png')}></Image>
            <Text style={pColorStyles.themeColor1}>New Task</Text>
          </View>
          <Text style={styles.taskContent} numberOfLines={3}>
            Please complete the RISC form Inspection(MOS)/AC-001 on 30 Nov 2020.
          </Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.taskTitle}>
            <Image
              style={styles.taskTitleIcon}
              source={require('../../../assets/images/icons/icon_new_task.png')}></Image>
            <Text style={pColorStyles.themeColor1}>New Task</Text>
          </View>
          <Text style={styles.taskContent} numberOfLines={3}>
            Please complete the RISC form Inspection(MOS)/AC-001 on 30 Nov 2020.
          </Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.taskTitle}>
            <Image
              style={styles.taskTitleIcon}
              source={require('../../../assets/images/icons/icon_new_task.png')}></Image>
            <Text style={pColorStyles.themeColor1}>New Task</Text>
          </View>
          <Text style={styles.taskContent} numberOfLines={3}>
            Please complete the RISC form Inspection(MOS)/AComplete the RISC
            form Inspection(MOSomplete the RISC form Inspection(MOS-001 on 30
            Nov 2020.
          </Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperBox: {
    marginTop: pxToDp(40),
    height: pxToDp(220),
    marginBottom: pxToDp(60),
  },
  pagination: {
    position: 'absolute',
    bottom: -pxToDp(60),
  },
  activeDot: {
    backgroundColor: pColorStyles.themeColor.color,
  },
  dot: {
    borderColor: pColorStyles.themeColor.color,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide: {
    flex: 1,
    backgroundColor: '#FFF',
    borderLeftWidth: pxToDp(10),
    borderLeftColor: pColorStyles.themeColor1.color,
    borderRadius: 6,
    paddingVertical: pxToDp(20),
    paddingHorizontal: pxToDp(10),
  },
  taskTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTitleIcon: {
    marginRight: pxToDp(14),
  },
  taskContent: {
    marginTop: pxToDp(6),
    paddingLeft: pxToDp(66),
    fontSize: pxToDp(26),
    color: '#404040',
  },
});

export default TaskSwiper;
