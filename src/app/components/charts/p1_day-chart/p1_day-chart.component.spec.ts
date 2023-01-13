import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1_dayChartComponent } from './p1_day-chart.component';

describe('DayChartComponent', () => {
  let component: P1_dayChartComponent;
  let fixture: ComponentFixture<P1_dayChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1_dayChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1_dayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
