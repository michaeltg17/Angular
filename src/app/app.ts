import { Component } from '@angular/core';
import { CustomersTable } from './components/customers-table/customers-table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Theme, ThemeColor, themeColors } from './models/theme';

@Component({
  selector: 'app-root',
  imports: [
    CustomersTable, 
    MatToolbarModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    CommonModule, 
    MatIconModule, 
    MatRadioModule, 
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedTheme = themeColors[1];

  ngOnInit() {
    const savedTheme: Theme = localStorage.getItem('theme');
    if (savedTheme) this.selectedTheme = savedTheme;
    document.documentElement.className = this.selectedTheme;
  }

  setThemeColor(color: string) {
    this.selectedTheme = theme;
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }

  setThemeType(mode: 'light' | 'dark') {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(mode);
  }

}
