import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ThemeSelector } from './components/theme-selector/theme-selector';
import { TitleService } from './services/title.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, ThemeSelector, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  titleService = inject(TitleService);
}
