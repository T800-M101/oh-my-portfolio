import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark = signal<boolean>(false);
  
  currentTheme = computed(() => this.isDark() ? 'dark' : 'light');

  constructor() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.isDark.set(savedTheme === 'dark');
    } else {
      this.isDark.set(systemPrefersDark);
    }
    
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark.update(current => !current);
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme());
  }

  private applyTheme() {
    const theme = this.isDark() ? 'dark-theme' : '';
    document.documentElement.className = theme;
  }

  getIsDark(): boolean {
    return this.isDark();
  }
  
}
