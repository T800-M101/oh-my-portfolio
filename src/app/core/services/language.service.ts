import { Injectable, signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage = signal<string>('en');


  setCurrentLanguage(lang: string): void {
    if (!['en', 'es'].includes(lang)) return;
    this.currentLanguage.set(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage();
  }

}
