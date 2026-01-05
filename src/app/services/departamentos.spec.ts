import { TestBed } from '@angular/core/testing';
import { DepartamentosService } from './departamentos';

describe('Departamentos', () => {
  let service: DepartamentosService;

  beforeEach(() => {
    // Configura el entorno de pruebas
    TestBed.configureTestingModule({});

    // Inyecta el servicio
    service = TestBed.inject(DepartamentosService);
  });

  it('should be created', () => {
    // Verifica que el servicio exista
    expect(service).toBeTruthy();
  });
});
