import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CargosService } from '../../services/cargos';

@Component({
  selector: 'app-cargos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cargos.html',
  styleUrl: './cargos.css',
})
export class Cargos implements OnInit{
  cargos: any[] = [];
  constructor(private cargosService: CargosService){
    console.log('Constructor del componente');
  }

  ngOnInit(): void {
    console.log('ngOnInit Ejecutado');

  this.cargosService.getCargos().subscribe((data: any) => {
    console.log('DATA COMPLETA:', data);
    this.cargos = data;
});

  }
}
