import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APP_RUTAS } from 'app/app.routes';
import { ServicioPeliculasService } from 'app/services/servicio-peliculas.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_RUTAS
  ],
  providers: [ServicioPeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
