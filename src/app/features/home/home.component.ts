import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { Profile } from '../../core/interfaces/profile.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  profileDataService = inject( ProfileDataService );
  route = inject( ActivatedRoute );
   
  profile: Profile = this.profileDataService.getProfile();
  
  ngOnInit() {
    this.route.fragment
      .pipe(filter(fragment => !!fragment))
      .subscribe(fragment => {
        this.scrollToFragment(fragment!);
      });
  }

  scrollToFragment(fragment: string) {
    setTimeout(() => { // Ensures DOM is ready
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
