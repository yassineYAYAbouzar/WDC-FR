import { TestBed } from '@angular/core/testing';

import { ExerciceActivityService } from './exercice-activity.service';

describe('ExerciceActivityService', () => {
  let service: ExerciceActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
