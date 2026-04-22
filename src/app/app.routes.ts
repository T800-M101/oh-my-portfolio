import { Routes } from '@angular/router';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { CoverLetterGeneratorComponent } from './cover-letter-generator/cover-letter-generator.component';

export const routes: Routes = [
  { path: '', component: MainPortfolioComponent },
  { path: 'memo-private-generator', component: CoverLetterGeneratorComponent },
  { path: '**', redirectTo: '' }
];
