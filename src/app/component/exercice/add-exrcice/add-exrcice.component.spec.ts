import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExrciceComponent } from './add-exrcice.component';

describe('AddExrciceComponent', () => {
  let component: AddExrciceComponent;
  let fixture: ComponentFixture<AddExrciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExrciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExrciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
