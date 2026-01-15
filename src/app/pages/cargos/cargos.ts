import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CargosService } from '../../services/cargos';
import { Observable } from 'rxjs';
import { Cargo } from './cargo';

@Component({
  selector: 'app-cargos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cargos.html',
  styleUrl: './cargos.css',
})
export class Cargos{
  cargos$: Observable<Cargo[]>;

  constructor(private cargoService: CargosService){
    this.cargos$ = this.cargoService.getCargos();
  }
  
}
