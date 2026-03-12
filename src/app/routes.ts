import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Cv } from './components/cv/cv';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';

export const routes: Routes = [
  { path: '', component: Hero }, // Página de inicio por defecto
  { path: 'proyectos', component: Projects },
  { path: 'curriculum', component: Cv },
  { path: 'sidebar', component: Sidebar},
  { path: 'footer', component: Footer },
  { path: '**', redirectTo: '' } // Redirigir a inicio si la ruta no existe
];
