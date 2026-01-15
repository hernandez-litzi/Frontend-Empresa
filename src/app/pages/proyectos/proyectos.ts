import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos';
import { Observable } from 'rxjs';
import { Proyec } from './proyec';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
 proyectos$: Observable<Proyec[]>;

 constructor(private proyectService: ProyectosService){
  this.proyectos$ = this.proyectService.getProyectos();
 }
}
