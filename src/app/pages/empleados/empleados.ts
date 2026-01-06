import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { empleadosService } from '../../services/empleados';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {
  empleados: any[] = [];
  constructor(private empleadosService : empleadosService){
    console.log('Constructor del componente');
  }

ngOnInit(): void {
  console.log('ngOnInit Ejecutando');
  this.empleadosService.getEmpleados().subscribe((data: any) =>{
    console.log('Datos desde la API:', data);
  
  this.empleados = data;  
  })
}
}
