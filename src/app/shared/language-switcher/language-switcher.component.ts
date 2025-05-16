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
    const storage = localStorage.getItem('lang');
    this.currentLanguage = storage || 'en';
    this.languageService.setCurrentLanguage(this.currentLanguage);
  }

  currentLanguage = 'en';

  private languageService = inject(LanguageService);

  
  toggleLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.currentLanguage = isChecked ? 'es' : 'en';
    this.languageService.setCurrentLanguage(this.currentLanguage);
    localStorage.setItem('lang', this.currentLanguage);
  }
}
