import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciotresComponent } from './ejerciciotres.component';

describe('EjerciciotresComponent', () => {
  let component: EjerciciotresComponent;
  let fixture: ComponentFixture<EjerciciotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciotresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
