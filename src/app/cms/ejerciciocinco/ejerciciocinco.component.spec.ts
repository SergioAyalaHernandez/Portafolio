import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciocincoComponent } from './ejerciciocinco.component';

describe('EjerciciocincoComponent', () => {
  let component: EjerciciocincoComponent;
  let fixture: ComponentFixture<EjerciciocincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciocincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciocincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
