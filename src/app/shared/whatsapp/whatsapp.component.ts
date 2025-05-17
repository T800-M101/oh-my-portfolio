import { Component, DoCheck, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent implements DoCheck {
  private dataService = inject(DataService);
  
  templateData = this.dataService.getTemplateData();
  
  ngDoCheck(): void {
    this.templateData = this.dataService.getTemplateData();
  }
}
