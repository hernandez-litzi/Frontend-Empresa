import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class empleadosService {
  private apiUrl = 'http://localhost:3000/empleados';
  constructor(private http: HttpClient) {}
  
  getEmpleados(){
    return this.http.get(this.apiUrl);
  }
}
