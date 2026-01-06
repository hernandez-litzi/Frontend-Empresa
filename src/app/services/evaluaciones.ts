import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EvaluacionesService {
  private apiUrl = 'http://localhost:3000/evaluaciones';
  constructor(private http: HttpClient) {}

  getEvaluaciones(){
    return this.http.get(this.apiUrl);
  }
}
