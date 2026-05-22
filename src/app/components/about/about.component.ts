import { Component, computed, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent  {

  private dataService = inject(DataService);
  private langService = inject(LanguageService);

  readonly about = this.dataService.about;
  readonly profile = this.dataService.profile;
  readonly skills = this.dataService.skills;
  readonly template = this.dataService.template;

public pdfUrl = computed(() => {
    const lang = this.langService.currentLanguage();
    return lang === 'es'
      ? 'assets/CV_2026_ES_GUILLERMO_MORAN.pdf'
      : 'assets/CV_2026_EN_GUILLERMO_MORAN.pdf';
  });



}
