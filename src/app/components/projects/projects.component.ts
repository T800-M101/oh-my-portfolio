import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements DoCheck {
  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
    this.projects = this.dataService.getProjects();
  }

  dataService = inject(DataService);

  templateData = this.dataService.getTemplateData();
  projects = this.dataService.getProjects();

}
