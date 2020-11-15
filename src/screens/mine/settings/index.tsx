import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import I18n, { setI18nLocale } from '../../../i18n';
import Cache from '../../../utils/cache';

const SettingsScreen = ({ navigation }: any) => {
    const goLanguage = () => {
        navigation.navigate('MineLayout', { screen: 'Language' });
    }

    return (
        <>
            <View style={{ marginTop: 10 }}>
                <ListItem>
                    <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ListItem.Title>{I18n.t('cache')}</ListItem.Title>
                        <Text style={{ fontSize: 12 }}>{I18n.t('cache')}</Text>
                    </ListItem.Content>
                </ListItem>
                <Divider></Divider>
                <ListItem onPress={() => goLanguage()}>
                    <ListItem.Content>
                        <ListItem.Title>{I18n.t('language')}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        </>
    )
}

export default SettingsScreen;