import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from '../../services/evaluaciones';

@Component({
  selector: 'app-evaluaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css',
})
export class Evaluaciones implements OnInit {
  evaluaciones: any[] = [];

  constructor(private evaluacionesService: EvaluacionesService){
    console.log('Constructor del Componente');
  }

  ngOnInit(): void {
    console.log('ngOnInit Ejecutando');
    this.evaluacionesService.getEvaluaciones().subscribe((data: any) =>{
      console.log('Datos desde API', data);
      this.evaluaciones = data;
    });
  }
}
