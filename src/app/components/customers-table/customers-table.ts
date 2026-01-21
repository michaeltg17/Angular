import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { CustomerCell } from './customer-cell/customer-cell';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-customers-table',
  imports: [
    MatTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    CustomerCell,
    FormsModule
  ],
  templateUrl: './customers-table.html',
  styleUrls: ['./customers-table.scss'],
})
export class CustomersTable implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'isActive'];
  dataSource = new MatTableDataSource<Customer>();
  filterValue: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.customerService.getCustomers().pipe(
      shareReplay(1),
      catchError(err => {
        this.snackBar.open(
          err?.status === 404 ? 'Customers file not found' : 'Failed to load customers',
          'Close',
          { duration: 4000 }
        );
        return of([]);
      })
    ).subscribe(customers => {
      this.dataSource.data = customers;
      this.applyFilter(this.filterValue);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string) {
    this.filterValue = value.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
  }
}