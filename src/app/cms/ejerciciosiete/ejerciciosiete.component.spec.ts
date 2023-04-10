import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosieteComponent } from './ejerciciosiete.component';

describe('EjerciciosieteComponent', () => {
  let component: EjerciciosieteComponent;
  let fixture: ComponentFixture<EjerciciosieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
