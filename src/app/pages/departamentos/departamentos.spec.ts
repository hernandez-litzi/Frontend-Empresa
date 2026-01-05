import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Departamentos } from './departamentos';

describe('Departamentos', () => {
  let component: Departamentos;
  let fixture: ComponentFixture<Departamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el componente standalone
      imports: [Departamentos]
    }).compileComponents();

    // Crea el componente
    fixture = TestBed.createComponent(Departamentos);
    component = fixture.componentInstance;

    // Espera a que se inicialice
    await fixture.whenStable();
  });

  it('should create', () => {
    // Verifica que el componente exista
    expect(component).toBeTruthy();
  });
});
