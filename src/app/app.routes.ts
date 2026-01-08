import { Routes, RouterModule } from '@angular/router';
import { Departamentos } from './pages/departamentos/departamentos';
import { Cargos } from './pages/cargos/cargos';
import { Empleados } from './pages/empleados/empleados';
import { Evaluaciones } from './pages/evaluaciones/evaluaciones';
import { Proyectos } from './pages/proyectos/proyectos';
import { menuComponent } from './pages/Menu/menu';


export const routes: Routes = [
  { path: '', component: menuComponent},
  { path: 'departamentos',
    component: Departamentos },
  { path: 'cargos', component: Cargos },
  { path:'empleados', component: Empleados},
  { path:'evaluaciones', component: Evaluaciones},
  { path:'proyectos', component: Proyectos}
];

export class appRoutingModule{}
