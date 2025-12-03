export interface Variable {
  id: string;
  label: string;
  descriptionKey: string;
  categoryKey: string;
}

export const AVAILABLE_VARIABLES: Variable[] = [
  {
    id: 'user.name',
    label: 'user.name',
    descriptionKey: 'userFullName',
    categoryKey: 'categoryUser',
  },
  {
    id: 'user.email',
    label: 'user.email',
    descriptionKey: 'userEmail',
    categoryKey: 'categoryUser',
  },
  {
    id: 'user.firstName',
    label: 'user.firstName',
    descriptionKey: 'userFirstName',
    categoryKey: 'categoryUser',
  },
  {
    id: 'user.lastName',
    label: 'user.lastName',
    descriptionKey: 'userLastName',
    categoryKey: 'categoryUser',
  },
  {
    id: 'date.today',
    label: 'date.today',
    descriptionKey: 'dateToday',
    categoryKey: 'categoryDate',
  },
  {
    id: 'date.now',
    label: 'date.now',
    descriptionKey: 'dateNow',
    categoryKey: 'categoryDate',
  },
  {
    id: 'company.name',
    label: 'company.name',
    descriptionKey: 'companyName',
    categoryKey: 'categoryCompany',
  },
  {
    id: 'company.address',
    label: 'company.address',
    descriptionKey: 'companyAddress',
    categoryKey: 'categoryCompany',
  },
  {
    id: 'order.number',
    label: 'order.number',
    descriptionKey: 'orderNumber',
    categoryKey: 'categoryOrder',
  },
  {
    id: 'order.total',
    label: 'order.total',
    descriptionKey: 'orderTotal',
    categoryKey: 'categoryOrder',
  },
];
