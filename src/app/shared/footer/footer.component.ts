import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/interfaces/profile.interface';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements DoCheck {
  currentYear: number = new Date().getFullYear();
  
  private dataService = inject(DataService);

  profile: Profile = this.dataService.getProfile();
  templateData: Template = this.dataService.getTemplateData();
  
  ngDoCheck(): void {
    this.profile = this.dataService.getProfile();
    this.templateData = this.dataService.getTemplateData();
  }
}
