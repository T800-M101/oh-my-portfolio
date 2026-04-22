import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { WhatsappComponent } from '../shared/whatsapp/whatsapp.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-main-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    WhatsappComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './main-portfolio.component.html',
  styleUrl: './main-portfolio.component.scss'
})
export class MainPortfolioComponent {

}
