import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioComponent } from './main-portfolio.component';

describe('MainPortfolioComponent', () => {
  let component: MainPortfolioComponent;
  let fixture: ComponentFixture<MainPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
