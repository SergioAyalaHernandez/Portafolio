import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteOneComponent } from './parte-one.component';

describe('ParteOneComponent', () => {
  let component: ParteOneComponent;
  let fixture: ComponentFixture<ParteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
