import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private apiUrl = 'http://localhost:3000/proyectos';
  constructor(private http: HttpClient) {}
  
  getProyectos(){
    return this.http.get(this.apiUrl);
  }
}
