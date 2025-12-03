import { t, type Dictionary } from 'intlayer';

const aboutContent = {
  key: 'about',
  content: {
    title: t({
      en: 'Jose Santiago',
      es: 'Jose Santiago',
    }),
    description: t({
      en: 'Full-stack web developer passionate about creating modern and scalable applications. Specialized in React, TypeScript, and cutting-edge UI technologies.',
      es: 'Desarrollador web full-stack apasionado por crear aplicaciones modernas y escalables. Especializado en React, TypeScript y tecnologías de UI de vanguardia.',
    }),
    linkedinLabel: t({
      en: 'Connect with me on LinkedIn',
      es: 'Conéctate conmigo en LinkedIn',
    }),
  },
} satisfies Dictionary;

export default aboutContent;
