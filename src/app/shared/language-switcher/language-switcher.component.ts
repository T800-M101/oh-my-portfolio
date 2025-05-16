import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {

  ngOnInit(): void {
    const ls = localStorage.getItem('lang');
    this.currentLanguage = ls || 'en';
    this.languageService.currentLanguage.set(this.currentLanguage);
  }
  currentLanguage = 'en';

  languageService = inject(LanguageService);

  
  toggleLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.currentLanguage = isChecked ? 'es' : 'en';
    this.languageService.currentLanguage.set(this.currentLanguage);
    localStorage.setItem('lang', this.currentLanguage);
  }
}
