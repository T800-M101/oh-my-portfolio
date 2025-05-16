import { Component, DoCheck, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { DataService } from '../../core/services/data.service';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent  implements DoCheck{
  themeService = inject(ThemeService);
  private dataService = inject(DataService);
  
  templateData: Template = this.dataService.getTemplateData();
  
  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
