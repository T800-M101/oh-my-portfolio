import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { Profile } from '../../core/interfaces/profile.interface';
import { Skill } from '../../core/interfaces/skill.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements DoCheck {
  ngDoCheck(): void {
    this.profile = this.dataService.getProfile();
    this.templateData = this.dataService.getTemplateData();
  }

  dataService = inject(DataService);
  private pdfService = inject(PdfGeneratorService);

  profile: Profile = this.dataService.getProfile();
  skills: Skill[] = this.dataService.getSkills();
  templateData = this.dataService.getTemplateData();

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
