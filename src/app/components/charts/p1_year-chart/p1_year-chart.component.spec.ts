import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1_yearChartComponent } from './p1_year-chart.component';

describe('YearChartComponent', () => {
  let component: P1_yearChartComponent;
  let fixture: ComponentFixture<P1_yearChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1_yearChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1_yearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
