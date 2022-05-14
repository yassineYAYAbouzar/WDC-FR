import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExrciceComponent } from './list-exrcice.component';

describe('ListExrciceComponent', () => {
  let component: ListExrciceComponent;
  let fixture: ComponentFixture<ListExrciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExrciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExrciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
