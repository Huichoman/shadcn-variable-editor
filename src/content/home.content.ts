import { t, type Dictionary } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    welcome: t({
      en: 'Welcome',
      es: 'Bienvenido',
    }),
    description: t({
      en: 'This is the home page for our application.',
      es: 'Esta es la página de inicio de nuestra aplicación.',
    }),
    count: t({
      en: 'Count',
      es: 'Contador',
    }),
    increment: t({
      en: '+1',
      es: '+1',
    }),
    reset: t({
      en: 'Reset',
      es: 'Reiniciar',
    }),
  },
} satisfies Dictionary;

export default homeContent;
