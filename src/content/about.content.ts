import { t, type Dictionary } from 'intlayer';

const aboutContent = {
  key: 'about',
  content: {
    aboutUs: t({
      en: 'About Us',
      es: 'Acerca de Nosotros',
    }),
    description: t({
      en: 'This is the about page for our application.',
      es: 'Esta es la página acerca de nuestra aplicación.',
    }),
  },
} satisfies Dictionary;

export default aboutContent;
