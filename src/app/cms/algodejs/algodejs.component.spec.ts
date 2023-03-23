import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodejsComponent } from './algodejs.component';

describe('AlgodejsComponent', () => {
  let component: AlgodejsComponent;
  let fixture: ComponentFixture<AlgodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
