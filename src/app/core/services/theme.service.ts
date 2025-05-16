import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDark = signal<boolean>(false);

  currentTheme = computed(() => (this.isDark() ? 'dark' : 'light'));

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) this.isDark.set(savedTheme === 'dark');

    this.applyTheme();
  }

  toggleTheme() {
    this.isDark.update((current) => !current);
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme());
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark-mode', this.isDark());
  }

  getIsDark(): boolean {
    return this.isDark();
  }
}
