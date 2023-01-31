import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteThreeComponent } from './parte-three.component';

describe('ParteThreeComponent', () => {
  let component: ParteThreeComponent;
  let fixture: ComponentFixture<ParteThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
