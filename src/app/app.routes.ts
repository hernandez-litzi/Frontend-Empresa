import { Routes } from '@angular/router';
import { Cargos } from './pages/cargos/cargos';
import { Empleados } from './pages/empleados/empleados';
import { Evaluaciones } from './pages/evaluaciones/evaluaciones';
import { Proyectos } from './pages/proyectos/proyectos';
import { menuComponent } from './pages/Menu/menu';
import { Departamentos } from './pages/departamentos/departamentos';
import { Formulario } from './pages/shared/formulario/formulario';


export const routes: Routes = [
  { path: '', 
    component: menuComponent},
      {path: 'departamentos', component: Departamentos},
      { path: 'cargos', component: Cargos },
      { path:'empleados', component: Empleados},
      { path:'evaluaciones', component: Evaluaciones},
      { path:'proyectos', component: Proyectos},
       { path:'formulario', component: Formulario}
];

export class appRoutingModule{}
