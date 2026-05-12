import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent  {

  private dataService = inject(DataService);
  private pdfService = inject(PdfGeneratorService);

  readonly about = this.dataService.about;
  readonly profile = this.dataService.profile;
  readonly skills = this.dataService.skills;
  readonly template = this.dataService.template;

generateCV() {
    this.pdfService.generatePDF(
      this.profile(),
      this.skills(),
      this.template()
    );
  }



}
