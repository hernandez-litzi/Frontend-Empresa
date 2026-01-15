import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { empleadosService } from '../../services/empleados';
import { Empleo } from './empleo';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.html'
})

export class Empleados {
  empleados$: Observable<Empleo[]>;

  constructor(private empleoService: empleadosService) {
    this.empleados$ = this.empleoService.getEmpleados();
  }
}
