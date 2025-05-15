import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements DoCheck {
  ngDoCheck(): void {
    this.profile = this.dataService.getProfile();
    this.templateData = this.dataService.getTemplateData();

    
  }
  currentYear: number = new Date().getFullYear();

  dataService = inject(DataService);
  profile = this.dataService.getProfile();
  templateData = this.dataService.getTemplateData();

}
