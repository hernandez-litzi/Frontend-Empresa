import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgClass, CommonModule],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() texto= '';
  @Input() ruta='';
  @Input()
  variant: "Agregar" | "Editar" | "Eliminar" | "Guardar" | "Cancelar" = "Agregar";
}
