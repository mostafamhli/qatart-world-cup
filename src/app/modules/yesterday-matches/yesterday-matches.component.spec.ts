import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayMatchesComponent } from './yesterday-matches.component';

describe('YesterdayMatchesComponent', () => {
  let component: YesterdayMatchesComponent;
  let fixture: ComponentFixture<YesterdayMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesterdayMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesterdayMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
