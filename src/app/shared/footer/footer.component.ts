import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  {
  currentYear: number = new Date().getFullYear();

  private dataService = inject(DataService);

  readonly profile = this.dataService.profile();
  readonly template = this.dataService.template;

}
