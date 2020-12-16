import pxToDp from '@/utils/pxToDp';
import { pColorStyles } from './color';
import { StyleSheet } from 'react-native';
export const pButtonStyles = StyleSheet.create({
    disabledSubmit: {
        color: '#FFF',
        backgroundColor: pColorStyles.themeDisabledColor1.color
    },
    commonButtonStyle: {
        backgroundColor: pColorStyles.themeColor1.color,
        height: pxToDp(100),
        borderRadius: 6
    }
})