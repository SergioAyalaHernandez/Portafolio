import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciodosComponent } from './ejerciciodos.component';

describe('EjerciciodosComponent', () => {
  let component: EjerciciodosComponent;
  let fixture: ComponentFixture<EjerciciodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
