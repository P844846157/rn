import pxToDp from '@/utils/pxToDp';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  VictoryPie,
  VictoryTheme,
} from 'victory-native';

const TaskPie = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/home/img_Dashbiard_background.png')}
        style={[styles.main]}>
        <View style={styles.pieWrap}>
          <VictoryPie
            width={pxToDp(200)}
            height={pxToDp(200)}
            theme={VictoryTheme.material}
            labels={() => null}
            data={[
              {x: 'Draft', y: 0},
              {x: 'In Progress', y: 50},
              {x: 'Ready for Submit', y: 25},
              {x: 'Overdue', y: 25},
            ]}
            radius={pxToDp(80)}
            innerRadius={pxToDp(100)}
          />
          <View style={styles.pieLabel}>
            <Text style={{fontSize: pxToDp(48)}}>4</Text>
            <Text style={{fontSize: pxToDp(20)}}>Total Forms</Text>
          </View>
        </View>

        <View style={styles.echartLabel}>
          <View style={styles.echartLabelItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles.echartLabelItemMark,
                  {backgroundColor: '#707070'},
                ]}></View>
              <Text>Draft</Text>
            </View>
            <Text>0%</Text>
          </View>
          <View style={styles.echartLabelItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles.echartLabelItemMark,
                  {backgroundColor: '#0069A6'},
                ]}></View>
              <Text>In Progress</Text>
            </View>
            <Text>50%</Text>
          </View>
          <View style={styles.echartLabelItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles.echartLabelItemMark,
                  {backgroundColor: '#588309'},
                ]}></View>
              <Text>Ready for Submit</Text>
            </View>
            <Text>25%</Text>
          </View>
          <View style={styles.echartLabelItem}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles.echartLabelItemMark,
                  {backgroundColor: '#DE464C'},
                ]}></View>
              <Text>Overdue</Text>
            </View>
            <Text>25%</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: pxToDp(320),
  },
  main: {
    flex: 1,
    height: pxToDp(320),
    paddingHorizontal: pxToDp(30),
    paddingVertical: pxToDp(60),
    backgroundColor: '#FFF',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pieWrap: {
    position: 'relative',
    width: pxToDp(200),
    height: pxToDp(200),
  },
  pieLabel: {
    position: 'absolute',
    width: '100%',
    height: pxToDp(160),
    alignItems: 'center',
    justifyContent: 'center',
  },
  echartLabel: {
    flex: 1,
    height: '100%',
    marginLeft: pxToDp(32),
    justifyContent: 'space-between',
  },
  echartLabelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  echartLabelItemMark: {
    width: pxToDp(16),
    height: pxToDp(16),
    marginRight: pxToDp(24),
  },
});

export default TaskPie;
