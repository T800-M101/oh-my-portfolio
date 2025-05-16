import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Template } from '../../core/interfaces/template.interface';
import { Project } from '../../core/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements DoCheck {
  
  private dataService = inject(DataService);
  
  templateData: Template = this.dataService.getTemplateData();
  projects: Project[] = this.dataService.getProjects();
  
  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
    this.projects = this.dataService.getProjects();
  }

}
