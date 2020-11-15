import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import I18n from '../../i18n';
const MineScreen = ({ navigation }: any) => {
    
    const goSettings = () => {
        navigation.navigate('MineLayout', { screen: 'settings' });
    }

    return (
        <View style={{ marginTop: 10 }}>
            <ListItem onPress={() => goSettings()}>
                <ListItem.Content>
                    <ListItem.Title>{I18n.t('setting')}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MineScreen;