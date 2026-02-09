import { Injectable } from '@angular/core';

export const getTitle = () => 'Angular App';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  getTitle = () => 'Angular App';
}
