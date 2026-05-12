import {
  Component,
  computed,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);

  readonly home = this.dataService.home;

  isMobile = signal(false);

  private readonly skillTags = [
    'Angular + Signals',
    'RxJS & TypeScript',
    'Scalable UI Architecture',
    'Clean Code',
  ];

  private skillIndex = signal(0);
  currentSkill = computed(() => this.skillTags[this.skillIndex()]);

  private intervalId?: ReturnType<typeof setInterval>;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();

    this.rotateSkills();

    this.route.fragment.pipe(filter((f) => !!f)).subscribe((fragment) => {
      this.scrollToFragment(fragment!);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private checkScreenSize(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }

  private scrollToFragment(fragment: string) {
    requestAnimationFrame(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  private rotateSkills(): void {
    this.intervalId = setInterval(() => {
      this.skillIndex.update((i) => (i + 1) % this.skillTags.length);
    }, 2500);
  }
}
