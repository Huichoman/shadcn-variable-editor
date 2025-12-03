import { t, type Dictionary } from 'intlayer';

const navbarContent = {
  key: 'navbar',
  content: {
    home: t({
      en: 'Home',
      es: 'Inicio',
    }),
    about: t({
      en: 'About',
      es: 'Acerca de',
    }),
    toggleTheme: t({
      en: 'Toggle theme',
      es: 'Cambiar tema',
    }),
    changeLanguage: t({
      en: 'Change Language',
      es: 'Cambiar Idioma',
    }),
  },
} satisfies Dictionary;

export default navbarContent;
