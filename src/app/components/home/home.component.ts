import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/interfaces/profile.interface';
import { Template } from '../../core/interfaces/template.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, DoCheck {
  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);


  profile: Profile = this.dataService.getProfile();
  templateData: Template = this.dataService.getTemplateData();

  ngDoCheck(): void {
    this.profile = this.dataService.getProfile();
    this.templateData = this.dataService.getTemplateData();
  }
  
  ngOnInit() {
    this.route.fragment
      .pipe(filter((fragment) => !!fragment))
      .subscribe((fragment) => {
        this.scrollToFragment(fragment!);
      });
  }

  scrollToFragment(fragment: string) {
    setTimeout(() => {
      // Ensures DOM is ready
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
