import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { BuscarComponent } from 'app/components/buscar/buscar.component';
import { DetallePeliculaComponent } from 'app/components/detalle-pelicula/detalle-pelicula.component';

const RUTAS: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'detallePelicula/:id', component: DetallePeliculaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_RUTAS = RouterModule.forRoot(RUTAS);
