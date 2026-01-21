import { Component, signal } from '@angular/core';
import { CustomersTable } from './components/customers-table/customers-table';

@Component({
  selector: 'app-root',
  imports: [CustomersTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app');
}
