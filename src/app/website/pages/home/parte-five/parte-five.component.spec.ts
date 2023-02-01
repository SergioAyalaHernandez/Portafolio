import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteFiveComponent } from './parte-five.component';

describe('ParteFiveComponent', () => {
  let component: ParteFiveComponent;
  let fixture: ComponentFixture<ParteFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
