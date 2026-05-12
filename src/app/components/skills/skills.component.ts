import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private dataService = inject(DataService);

  readonly skills = this.dataService.skills;
  readonly template = this.dataService.template;


}
