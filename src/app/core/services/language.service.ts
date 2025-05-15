import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = signal('en');

  constructor() { }
}
