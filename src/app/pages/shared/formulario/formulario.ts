import { Component } from '@angular/core';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartamentosService } from '../../../services/departamentos';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, Button, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  formulario = {
    nombre: '',
    descripcion: ''
  };

  mensaje = '';
  error = '';


  constructor(private departamentoService: DepartamentosService) { }

  Guardar() {
    this.departamentoService.crear(this.formulario).subscribe({
      next: (res) => {
        this.mensaje = 'Departmento guardado correctamente';
        this.error = '';
        console.log('Guardado correctamente', res);
      }, error: (err) => {
        this.mensaje = '';
        this.error = 'Error al guardar el departamento';
        console.error('Error al guardar', err);
      }
    });
  }

Cancelar(){
    this.formulario = {
    nombre: '',
    descripcion: ''
  };

  this.mensaje = '';
  this.error = '';
}
}
