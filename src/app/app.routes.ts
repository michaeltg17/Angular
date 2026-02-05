import { Routes } from '@angular/router';
import { CustomersTable } from './components/customers-table/customers-table';
import { PendingChangesGuard } from './guards/pending-changes.guard';

export const routes: Routes = [
  { path: 'customers', component: CustomersTable, canDeactivate: [PendingChangesGuard], runGuardsAndResolvers: 'always' },
  {
    path: 'customers/new',
    component: CustomersTable,
    canDeactivate: [PendingChangesGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'customers/:id',
    component: CustomersTable,
    canDeactivate: [PendingChangesGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'customers/:id/edit',
    component: CustomersTable,
    canDeactivate: [PendingChangesGuard],
    runGuardsAndResolvers: 'always'
  }
];
