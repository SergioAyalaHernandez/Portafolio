import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioseisComponent } from './ejercicioseis.component';

describe('EjercicioseisComponent', () => {
  let component: EjercicioseisComponent;
  let fixture: ComponentFixture<EjercicioseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
