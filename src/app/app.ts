import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  // Componente independiente
  standalone: true,
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // Necesario para que funcionen las rutas
  imports: [RouterOutlet],

  // HTML principal
  templateUrl: './app.html',

  // Estilos principales
  styleUrls: ['./app.css']
})
export class AppComponent {}
