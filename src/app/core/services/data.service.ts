import { computed, inject, Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { HOME_DATA } from '../constants/home-data';
import { ABOUT_DATA } from '../constants/about-data';
import { PROFILE_DATA } from '../constants/profile-data';
import { SKILLS_DATA } from '../constants/skills-data';
import { TEMPLATE_DATA } from '../constants/template-data';
import { PROJECTS_DATA } from '../constants/project-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private languageService = inject(LanguageService);

  readonly home = computed(() => HOME_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
  readonly about = computed(() => ABOUT_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
  readonly profile = computed(() => PROFILE_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
  readonly skills = computed(() => SKILLS_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
  readonly template = computed(() => TEMPLATE_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
  readonly projects = computed(() => PROJECTS_DATA[this.languageService.getCurrentLanguage() as 'en' | 'es']);
}
