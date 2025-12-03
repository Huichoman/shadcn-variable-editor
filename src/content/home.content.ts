import { t, type Dictionary } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    title: t({
      en: 'Smart Text Editor with Dynamic Variables',
      es: 'Editor de Texto Inteligente con Variables Dinámicas',
    }),
    description: t({
      en: 'A powerful rich text editor built with Tiptap, TypeScript, and shadcn/ui. Insert dynamic variables using the toolbar or type { to trigger autocomplete. Click on any variable to copy or delete it. Perfect for creating templates for emails, documents, and more.',
      es: 'Un editor de texto enriquecido construido con Tiptap, TypeScript y shadcn/ui. Inserta variables dinámicas usando la barra de herramientas o escribe { para activar el autocompletado. Haz clic en cualquier variable para copiarla o eliminarla. Perfecto para crear plantillas de correos, documentos y más.',
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
