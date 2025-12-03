import { t, type Dictionary } from 'intlayer';

const variableEditorContent = {
  key: 'variable-editor',
  content: {
    // NodeView actions
    copyVariable: t({
      en: 'Copy variable',
      es: 'Copiar variable',
    }),
    deleteVariable: t({
      en: 'Delete variable',
      es: 'Eliminar variable',
    }),
    variableInfo: t({
      en: 'This variable will be replaced with actual data when the content is processed',
      es: 'Esta variable será reemplazada con datos reales al procesar el contenido',
    }),

    // Toolbar
    insertVariable: t({
      en: 'Insert Variable',
      es: 'Insertar Variable',
    }),
    noVariablesFound: t({
      en: 'No variables found.',
      es: 'No se encontraron variables.',
    }),
    tipText: t({
      en: 'Tip: Type',
      es: 'Consejo: Escribe',
    }),
    tipAction: t({
      en: 'to insert variables',
      es: 'para insertar variables',
    }),

    // Variable descriptions
    userFullName: t({
      en: 'Full name of the current user',
      es: 'Nombre completo del usuario actual',
    }),
    userEmail: t({
      en: 'Email address of the current user',
      es: 'Dirección de correo del usuario actual',
    }),
    userFirstName: t({
      en: 'First name of the current user',
      es: 'Primer nombre del usuario actual',
    }),
    userLastName: t({
      en: 'Last name of the current user',
      es: 'Apellido del usuario actual',
    }),
    dateToday: t({
      en: 'Current date',
      es: 'Fecha actual',
    }),
    dateNow: t({
      en: 'Current date and time',
      es: 'Fecha y hora actual',
    }),
    companyName: t({
      en: 'Company name',
      es: 'Nombre de la empresa',
    }),
    companyAddress: t({
      en: 'Company address',
      es: 'Dirección de la empresa',
    }),
    orderNumber: t({
      en: 'Order number',
      es: 'Número de pedido',
    }),
    orderTotal: t({
      en: 'Order total amount',
      es: 'Monto total del pedido',
    }),

    // Categories
    categoryUser: t({
      en: 'User',
      es: 'Usuario',
    }),
    categoryDate: t({
      en: 'Date',
      es: 'Fecha',
    }),
    categoryCompany: t({
      en: 'Company',
      es: 'Empresa',
    }),
    categoryOrder: t({
      en: 'Order',
      es: 'Pedido',
    }),
  },
} satisfies Dictionary;

export default variableEditorContent;
