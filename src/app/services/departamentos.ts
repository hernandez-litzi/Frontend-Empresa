import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depto } from '../pages/departamentos/depto';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private apiUrl = 'http://localhost:3000/departamentos';
  constructor(private http: HttpClient) {}
  getDepartamentos(){
  return this.http.get<Depto[]>(this.apiUrl);
  }
  crear(depto: Depto): Observable<Depto>{
  return this.http.post<Depto>(this.apiUrl, depto);
  }

  actualizar(id: number, depto: Depto): Observable<Depto>{
  return this.http.patch<Depto>(`${this.apiUrl}/${id}`, depto)
  }

  eliminar(id: number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}

