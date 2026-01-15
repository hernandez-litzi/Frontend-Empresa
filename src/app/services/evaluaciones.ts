import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evalua } from '../pages/evaluaciones/evalua';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EvaluacionesService {
  private apiUrl = 'http://localhost:3000/evaluaciones';
  constructor(private http: HttpClient) { }

  getEvaluaciones() {
    return this.http.get<Evalua[]>(this.apiUrl);
  }
  crear(evalua: Evalua): Observable<Evalua> {
    return this.http.post<Evalua>(this.apiUrl, evalua);
  }

  actualizar(id: number, evalua: Evalua): Observable<Evalua> {
    return this.http.patch<Evalua>(`${this.apiUrl}/${id}`, evalua)
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
