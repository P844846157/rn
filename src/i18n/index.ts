import I18n from 'react-native-i18n';
import en from './language/en';
import zh from './language/zh';
 
I18n.defaultLocale = 'zh';
I18n.locale = 'zh';
I18n.fallbacks = true;

I18n.translations = {
    en,
    zh,
};

export default I18n;