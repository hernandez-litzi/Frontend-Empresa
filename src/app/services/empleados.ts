import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleo } from '../pages/empleados/empleo';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class empleadosService {
  private apiUrl = 'http://localhost:3000/empleados';
  constructor(private http: HttpClient) {}
  
  getEmpleados(){
    return this.http.get<Empleo[]>(this.apiUrl);
  }

  crear(empleo: Empleo): Observable<Empleo>{
    return this.http.post<Empleo>(this.apiUrl, empleo);
  }
  
  actualizar(id: number, empleo: Empleo): Observable<Empleo>{
    return this.http.patch<Empleo>(`${this.apiUrl}/${id}`, empleo)
  }
  
  eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
    }
}
