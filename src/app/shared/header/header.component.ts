import { Component, DoCheck, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
  }
  menuOpen = false;
  currentLanguage = 'en';

  languageService = inject(LanguageService);
  dataService = inject(DataService);

  templateData = this.dataService.getTemplateData();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.currentLanguage = isChecked ? 'es' : 'en';
    this.languageService.currentLanguage.set(this.currentLanguage);
  }
}