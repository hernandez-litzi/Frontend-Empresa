import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from '../../services/evaluaciones';
import { Observable } from 'rxjs';
import { Evalua } from './evalua';

@Component({
  selector: 'app-evaluaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css',
})
export class Evaluaciones{
  evaluaciones$: Observable<Evalua[]>;

  constructor(private evaluaService: EvaluacionesService){
    this.evaluaciones$ = this.evaluaService.getEvaluaciones();
  }
}
