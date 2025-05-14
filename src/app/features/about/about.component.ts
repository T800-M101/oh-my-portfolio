import { Component, inject } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { Profile } from '../../core/interfaces/profile.interface';
import { Skill } from '../../core/interfaces/skill.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profileDataService = inject( ProfileDataService );
  private pdfService = inject( PdfGeneratorService );

  profile: Profile = this.profileDataService.getProfile();
  skills: Skill[] = this.profileDataService.getSkills();

  get aboutTextWithBreak(): string {
    return this.profile.about.replace('technologies.', 'technologies.<br><br>');
  }

  generateCV() {
    const profile = {
      name: this.profile.name,
      title: this.profile.title,
      description: this.profile.intro,
    };

    this.pdfService.generatePDF(this.profile, this.skills);
  }
}


