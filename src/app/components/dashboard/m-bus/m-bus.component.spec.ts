import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBusComponent } from './m-bus.component';

describe('MBusComponent', () => {
  let component: MBusComponent;
  let fixture: ComponentFixture<MBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
