import { Component, inject } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  profileDataService = inject( ProfileDataService);
  skills = this.profileDataService.getSkills();

}
