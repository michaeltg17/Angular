// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { SelectionModel } from '@angular/cdk/collections';
// import { Customer } from '../../models/customer';
// import { MatButton, MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

// @Component({
//   selector: 'app-customer-actions',
//   imports: [MatButtonModule, MatIconModule],
//   templateUrl: './customer-actions.html',
//   styleUrl: './customer-actions.scss',
// })
// export class CustomerActions {
//   @Input({ required: true }) selection!: SelectionModel<Customer>;
//   @Input() filterValue = '';

//   @Output() add = new EventEmitter<void>();
//   @Output() edit = new EventEmitter<number>();
//   @Output() remove = new EventEmitter<number[]>();
//   @Output() filter = new EventEmitter<string>();

//   onAdd() {
//     this.add.emit();
//   }

//   onEdit() {
//     if (this.selection.selected.length !== 1) return;
//     this.edit.emit(this.selection.selected[0].id);
//   }

//   onDelete() {
//     if (this.selection.isEmpty()) return;
//     this.remove.emit(this.selection.selected.map((c) => c.id));
//   }

//   onFilter(value: string) {
//     this.filter.emit(value);
//   }
// }
