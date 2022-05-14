import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExrciceComponent } from './update-exrcice.component';

describe('UpdateExrciceComponent', () => {
  let component: UpdateExrciceComponent;
  let fixture: ComponentFixture<UpdateExrciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExrciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExrciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
