// Importa TestBed, que sirve para crear un entorno de pruebas en Angular
import { TestBed } from '@angular/core/testing';

// Importa el componente principal de la aplicación
import { AppComponent } from './app';

describe('App', () => {
  // Se ejecuta antes de cada prueba
  beforeEach(async () => {

    // Configura el módulo de pruebas
    await TestBed.configureTestingModule({

      // Importa el componente AppComponent (standalone)
      imports: [AppComponent],

    }).compileComponents(); // Compila el componente para pruebas
  });

  // PRUEBA 1: Verifica que el componente se cree correctamente
  it('should create the app', () => {

    // Crea una instancia del componente
    const fixture = TestBed.createComponent(AppComponent);

    // Obtiene la instancia del componente
    const app = fixture.componentInstance;

    // Verifica que el componente exista
    expect(app).toBeTruthy();
  });

  // PRUEBA 2: Verifica que se renderice un texto en el HTML
  it('should render title', async () => {

    // Crea el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Espera a que Angular termine de inicializar
    await fixture.whenStable();

    // Accede al HTML generado
    const compiled = fixture.nativeElement as HTMLElement;

    // Busca un elemento <h1> y verifica su contenido
    expect(
      compiled.querySelector('p1')?.textContent
    ).toContain('frontend-empresa');
  });
});
