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

// 设置locale
export const setI18nLocale = (locale: string) => {
    I18n.locale = locale;
}

export default I18n;