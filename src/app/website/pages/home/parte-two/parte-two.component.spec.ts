import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteTwoComponent } from './parte-two.component';

describe('ParteTwoComponent', () => {
  let component: ParteTwoComponent;
  let fixture: ComponentFixture<ParteTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
