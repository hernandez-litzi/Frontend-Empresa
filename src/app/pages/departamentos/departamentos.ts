import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosService } from '../../services/departamentos';
import { Depto } from './depto';
import { Observable } from 'rxjs/internal/Observable';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-departamentos',

  standalone: true,

  imports: [CommonModule, Button],

  templateUrl: './departamentos.html'
})

export class Departamentos {
  departamentos$: Observable<Depto[]>;

  constructor(private deptoService: DepartamentosService) {
    this.departamentos$ = this.deptoService.getDepartamentos();
  }
}


