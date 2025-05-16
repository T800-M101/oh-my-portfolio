import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { Profile } from '../../core/interfaces/profile.interface';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent, LanguageSwitcherComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements DoCheck {
 
  private dataService = inject(DataService);
  themeService = inject(ThemeService);

  profile: Profile = this.dataService.getProfile();
  templateData: Template = this.dataService.getTemplateData();

  menuOpen = false;

  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

 
}