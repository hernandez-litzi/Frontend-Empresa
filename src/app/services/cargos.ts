import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../pages/cargos/cargo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CargosService {
  private apiUrl = 'http://localhost:3000/cargo';
  constructor(private http: HttpClient) { }

  getCargos() {
    return this.http.get<Cargo[]>(this.apiUrl);
  }
  crear(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.apiUrl, cargo);
  }

  actualizar(id: number, cargo: Cargo): Observable<Cargo> {
    return this.http.patch<Cargo>(`${this.apiUrl}/${id}`, cargo)
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
