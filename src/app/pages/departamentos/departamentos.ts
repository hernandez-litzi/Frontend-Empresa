// Permite definir un componente en Angular
import { Component, OnInit } from '@angular/core';

// Incluye directivas como *ngFor y *ngIf
import { CommonModule } from '@angular/common';

// Servicio que consume la API
import { DepartamentosService } from '../../services/departamentos';

@Component({
  // Nombre del selector del componente
  selector: 'app-departamentos',

  // Indica que es un componente standalone
  standalone: true,

  // Módulos que este componente necesita
  imports: [CommonModule],

  // Archivo HTML del componente
  templateUrl: './departamentos.html',

  // Archivo CSS del componente
  styleUrl: './departamentos.css',
})
export class Departamentos implements OnInit {

  // Arreglo donde se almacenan los departamentos recibidos del backend
  departamentos: any[] = [];

  // Se inyecta el servicio en el constructor
  constructor(private departamentosService: DepartamentosService) {
    // Se ejecuta cuando se crea el componente
    console.log('CONSTRUCTOR DEL COMPONENTE');
  }

  // Se ejecuta cuando el componente ya está listo
  ngOnInit(): void {
    console.log('ngOnInit EJECUTADO');

    // Se llama al servicio para obtener los departamentos
    this.departamentosService.getDepartamentos().subscribe((data: any) => {
      // Muestra los datos recibidos en consola
      console.log('DATOS DESDE API:', data);

      // Se asignan los datos al arreglo
      this.departamentos = data;
    });
  }
}
