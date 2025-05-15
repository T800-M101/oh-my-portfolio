import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements DoCheck {

  ngDoCheck(): void {
    this.skills = this.dataService.getSkills();
    this.templateData = this.dataService.getTemplateData();
  }

  dataService = inject(DataService);
  skills = this.dataService.getSkills();
  templateData = this.dataService.getTemplateData();
}
