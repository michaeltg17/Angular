import { Routes } from '@angular/router';
import { CustomersTable } from './components/customers-table/customers-table';

export const routes: Routes = [
  {
    path: 'customers',
    component: CustomersTable,
    children: [
      { path: 'new', component: CustomersTable },
      { path: ':id', component: CustomersTable },
      { path: ':id/edit', component: CustomersTable },
    ],
  },
];
