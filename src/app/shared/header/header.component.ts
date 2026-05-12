import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent, LanguageSwitcherComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  private dataService = inject(DataService);
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  readonly profile = this.dataService.profile();
  readonly template = this.dataService.template;

  menuOpen = false;
  showAdminLink = false;
  private readonly SECRET_KEY = environment.adminKey;

   ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['access'] === this.SECRET_KEY) {
        this.showAdminLink = true;
        sessionStorage.setItem('admin_access', 'true');
        this.router.navigate(['/memo-private-generator'], {
          replaceUrl: true
        });
      }
    });
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


}
