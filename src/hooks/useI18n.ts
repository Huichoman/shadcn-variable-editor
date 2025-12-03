import { getHTMLTextDir } from 'intlayer';
import { useEffect } from 'react';
import { useLocale } from 'react-intlayer';

export const useI18n = () => {
  const { locale, setLocale, availableLocales } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getHTMLTextDir(locale);
  }, [locale]);

  return {
    locale,
    setLocale,
    availableLocales,
  };
};
