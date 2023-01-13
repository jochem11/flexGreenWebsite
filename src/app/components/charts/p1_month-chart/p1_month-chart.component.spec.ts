import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1_monthChartComponent } from './p1_month-chart.component';

describe('MonthChartComponent', () => {
  let component: P1_monthChartComponent;
  let fixture: ComponentFixture<P1_monthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1_monthChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1_monthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
