import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styles: []
})
export class DetallePeliculaComponent implements OnInit {
  protected detalle: any = '';
  private id: string;
  constructor(private routerActive: ActivatedRoute, private servicioPeliculas: ServicioPeliculasService) { }

  ngOnInit() {
    this.routerActive.params.subscribe(datos => this.id = datos.id);
    this.servicioPeliculas.buscarPeliculaId(this.id).subscribe(datos => {
      this.detalle = datos;
    });
  }
}
