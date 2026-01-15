import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyec } from '../pages/proyectos/proyec';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private apiUrl = 'http://localhost:3000/proyectos';
  constructor(private http: HttpClient) {}
  
  getProyectos(){
    return this.http.get<Proyec[]>(this.apiUrl);
  }
  crear(proyec: Proyec): Observable<Proyec>{
  return this.http.post<Proyec>(this.apiUrl, proyec);
  }

  actualizar(id: number, proyec: Proyec): Observable<Proyec>{
  return this.http.patch<Proyec>(`${this.apiUrl}/${id}`, proyec)
  }

  eliminar(id: number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`)
  } 
}
