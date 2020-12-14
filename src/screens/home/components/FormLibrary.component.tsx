import pxToDp from '@/utils/pxToDp';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const FormLibrary = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.srcollView}>
            <View style={styles.item}>
                <Image style={styles.icon} source={require('../../../assets/images/icons/icon_RISC.png')}></Image>
                <Text style={styles.text}>RISC</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.icon} source={require('../../../assets/images/icons/icon_Site_Safety.png')}></Image>
                <Text style={styles.text}>Site Safety</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.icon} source={require('../../../assets/images/icons/icon_Cleansing.png')}></Image>
                <Text style={styles.text}>Site Cleansing</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.icon} source={require('../../../assets/images/icons/icon_Site_Diary.png')}></Image>
                <Text style={styles.text}>Site Diary</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.icon} source={require('../../../assets/images/icons/icon_Labour_Return.png')}></Image>
                <Text style={styles.text}>Site Labour Return</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    srcollView: {
        // width: Dimensions.get('window').width
        marginRight: pxToDp(12)
    },
    item: {
        backgroundColor: '#FFF',
        borderRadius: 6,
        width: pxToDp(260),
        // height: pxToDp(192),
        paddingVertical: pxToDp(24),
        paddingLeft: pxToDp(30),
        marginRight: pxToDp(24)
    },
    icon: {
        width: pxToDp(88),
        height: pxToDp(88)
    },
    text: {
        marginTop: pxToDp(10),
        fontWeight: 'bold',
        fontSize: pxToDp(26)
    }
})

export default FormLibrary;