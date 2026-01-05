import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',

  // Componente independiente
  standalone: true,

  // Necesario para que funcionen las rutas
  imports: [RouterOutlet],

  // HTML principal
  templateUrl: './app.html',

  // Estilos principales
  styleUrls: ['./app.css']
})
export class AppComponent {}
