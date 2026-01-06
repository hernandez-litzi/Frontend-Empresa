import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CargosService {
  private apiUrl = 'http://localhost:3000/cargo';
  constructor(private http: HttpClient) {}

  getCargos() {
    return this.http.get(this.apiUrl);
  }
}
