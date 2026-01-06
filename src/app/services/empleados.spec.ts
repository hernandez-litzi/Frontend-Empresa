import { TestBed } from '@angular/core/testing';

import { empleadosService } from './empleados';

describe('Empleados', () => {
  let service: empleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(empleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
