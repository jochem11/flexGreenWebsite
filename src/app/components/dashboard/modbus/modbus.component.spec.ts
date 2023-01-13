import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModbusComponent } from './modbus.component';

describe('ModbusComponent', () => {
  let component: ModbusComponent;
  let fixture: ComponentFixture<ModbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
