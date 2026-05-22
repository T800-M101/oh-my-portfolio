import { Injectable, signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _currentLanguage = signal<string>('en');

  public currentLanguage = this._currentLanguage.asReadonly();

  setCurrentLanguage(lang: string): void {
    if (!['en', 'es'].includes(lang)) return;
    this._currentLanguage.set(lang);
  }

}
