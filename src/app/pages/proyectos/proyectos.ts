import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit{
  proyectos: any[] = [];
  
  constructor(private proyectosService: ProyectosService){
  console.log('Constructor del componente');
  }

  ngOnInit(): void {
    console.log('ngOnInit Ejecutando');
    this.proyectosService.getProyectos().subscribe((data: any) =>{
      console.log('Datos desde API', data);
      this.proyectos = data;
    });
  }
}
