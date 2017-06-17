import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APP_RUTAS } from 'app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    APP_RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
