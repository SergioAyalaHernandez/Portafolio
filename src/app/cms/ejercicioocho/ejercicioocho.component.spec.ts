import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioochoComponent } from './ejercicioocho.component';

describe('EjercicioochoComponent', () => {
  let component: EjercicioochoComponent;
  let fixture: ComponentFixture<EjercicioochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
