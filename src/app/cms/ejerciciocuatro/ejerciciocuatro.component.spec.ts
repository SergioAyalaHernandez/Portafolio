import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciocuatroComponent } from './ejerciciocuatro.component';

describe('EjerciciocuatroComponent', () => {
  let component: EjerciciocuatroComponent;
  let fixture: ComponentFixture<EjerciciocuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciocuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciocuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
