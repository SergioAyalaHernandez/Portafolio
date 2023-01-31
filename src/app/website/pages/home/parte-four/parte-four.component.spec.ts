import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteFourComponent } from './parte-four.component';

describe('ParteFourComponent', () => {
  let component: ParteFourComponent;
  let fixture: ComponentFixture<ParteFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
