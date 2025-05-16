import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { Profile } from '../../core/interfaces/profile.interface';
import { Skill } from '../../core/interfaces/skill.interface';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements DoCheck {
  
  private dataService = inject(DataService);
  private pdfService = inject(PdfGeneratorService);
  
  profile: Profile = this.dataService.getProfile();
  skills: Skill[] = this.dataService.getSkills();
  templateData: Template = this.dataService.getTemplateData();
  
  ngDoCheck(): void {
    this.profile = this.dataService.getProfile();
    this.templateData = this.dataService.getTemplateData();
    this.skills = this.dataService.getSkills();
  }
  
  generateCV() {
    const profile = {
      name: this.profile.name,
      title: this.profile.title,
      description: this.profile.intro,
    };

    this.pdfService.generatePDF(this.profile, this.skills, this.templateData);
  }
}
