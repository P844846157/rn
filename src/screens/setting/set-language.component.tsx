import React, {useLayoutEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Divider, ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from '../../i18n';

interface LanguageItemProps {
  key: string;
  title: string;
  [x: string]: any;
}

const languageList: LanguageItemProps[] = [
  {key: 'zh', title: '简体中文'},
  {key: 'en', title: '英文'},
];

export const SetLauguageScreen = ({navigation}: any) => {
  const [currentIndex, setCurrentIndex] = useState((): number => {
    return languageList.findIndex(
      (item: LanguageItemProps) => item.key == I18n.locale,
    );
  });
  const [locale, setLocale] = useState(I18n.locale);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {},
      headerLeft: () => (
        <Text
          style={{marginLeft: 10, color: '#ddd'}}
          onPress={() => navigation.goBack()}>
          取消
        </Text>
      ),
      headerRight: () => (
        <Button
          buttonStyle={{marginRight: 10, height: 26}}
          disabled={languageList[currentIndex].key == locale}
          onPress={() => setLanguage(languageList[currentIndex].key)}
          title="完成"
        />
      ),
    });
  }, [navigation, currentIndex, locale]);

  // 设置语言
  const setLanguage = (key: string) => {
    if (key == I18n.locale) return;
    I18n.locale = key;
    setLocale(I18n.locale);
    // Alert.alert('设置成功', '23', [
    //     { text: '确定', onPress: () => navigation.goBack() }
    // ]);
  };

  return (
    <>
      {languageList.map((item, index) => (
        <View key={index}>
          <ListItem
            onPress={() => {
              setCurrentIndex(index);
            }}>
            <ListItem.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ListItem.Title>{I18n.t(item.key)}</ListItem.Title>
              {index == currentIndex ? (
                <Ionicons
                  name="checkmark-outline"
                  size={18}
                  color="#03ccbb"></Ionicons>
              ) : (
                <></>
              )}
            </ListItem.Content>
          </ListItem>
          {index < languageList.length - 1 ? <Divider></Divider> : null}
        </View>
      ))}
    </>
  );
};
