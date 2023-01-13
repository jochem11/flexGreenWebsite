import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1_weekChartComponent } from './p1_week-chart.component';

describe('WeekChartComponent', () => {
  let component: P1_weekChartComponent;
  let fixture: ComponentFixture<P1_weekChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1_weekChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1_weekChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
