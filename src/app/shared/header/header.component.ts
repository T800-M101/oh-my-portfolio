import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { DataService } from '../../core/services/data.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, DoCheck {
  ngOnInit(): void {
    const ls = localStorage.getItem('lang');
    this.currentLanguage = ls || 'en';
    this.languageService.currentLanguage.set(this.currentLanguage);
  }

  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
  }

  menuOpen = false;
  currentLanguage = 'en';

  languageService = inject(LanguageService);
  dataService = inject(DataService);
  themeService = inject(ThemeService);

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
    localStorage.setItem('lang', this.currentLanguage);
  }
}