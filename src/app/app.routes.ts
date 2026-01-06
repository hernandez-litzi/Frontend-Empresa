import { Routes } from '@angular/router';
import { Departamentos } from './pages/departamentos/departamentos';
import { Cargos } from './pages/cargos/cargos';
import { Empleados } from './pages/empleados/empleados';
import { Evaluaciones } from './pages/evaluaciones/evaluaciones';
import { Proyectos } from './pages/proyectos/proyectos';

export const routes: Routes = [
  { path: 'departamentos', component: Departamentos },
  { path: 'cargos', component: Cargos },
  { path:'empleados', component: Empleados},
  { path:'evaluaciones', component: Evaluaciones},
  { path:'proyectos', component: Proyectos}
];
