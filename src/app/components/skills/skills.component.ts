import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Skill } from '../../core/interfaces/skill.interface';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements DoCheck {
  private dataService = inject(DataService);

  skills: Skill[] = this.dataService.getSkills();
  templateData: Template = this.dataService.getTemplateData();
  
  ngDoCheck(): void {
    this.skills = this.dataService.getSkills();
    this.templateData = this.dataService.getTemplateData();
  }
}
