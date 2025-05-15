import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button (click)="toggleTheme()" class="theme-toggle">
      <i class="fas" [class.fa-moon]="themeService.currentTheme() === 'light'" 
                    [class.fa-sun]="themeService.currentTheme() === 'dark'"></i>
      <span>{{ themeService.currentTheme() === 'light' ? 'Dark' : 'Light' }} Mode</span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-color);
      font-weight: 500;
      i {
        font-size: 1.2rem;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
