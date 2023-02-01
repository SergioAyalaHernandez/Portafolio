import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteSixComponent } from './parte-six.component';

describe('ParteSixComponent', () => {
  let component: ParteSixComponent;
  let fixture: ComponentFixture<ParteSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
