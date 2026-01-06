import { TestBed } from '@angular/core/testing';

import { EvaluacionesService } from './evaluaciones';

describe('Evaluaciones', () => {
  let service: EvaluacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
