import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-cell.html',
  styleUrls: ['./customer-cell.scss']
})
export class CustomerCell {
  @Input() value: string | boolean | number | null = null;
}
