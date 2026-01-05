// Permite que esta clase sea inyectada en otros lugares
import { Injectable } from '@angular/core';

// Cliente HTTP de Angular para consumir APIs (GET, POST, PUT, DELETE)
import { HttpClient } from '@angular/common/http';

@Injectable({
  // Hace que el servicio esté disponible en toda la aplicación
  providedIn: 'root'
})
export class DepartamentosService {

  // URL del backend (NestJS) que devuelve los departamentos
  private apiUrl = 'http://localhost:3000/departamentos';

  // Angular inyecta automáticamente HttpClient
  constructor(private http: HttpClient) {}

  // Método para obtener los departamentos desde la API
  getDepartamentos() {
    // Realiza una petición GET y devuelve un Observable
    return this.http.get(this.apiUrl);
  }
}
