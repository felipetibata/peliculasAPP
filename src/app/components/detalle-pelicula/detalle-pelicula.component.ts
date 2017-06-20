import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styles: []
})
export class DetallePeliculaComponent implements OnInit {

  constructor(private routerActive: ActivatedRoute, private servicioPeliculas: ServicioPeliculasService) { }

  ngOnInit() {
    this.routerActive.params.subscribe(datos => console.log(datos.id));

    /*console.log(this.servicioPeliculas.buscarPeliculaId().subscribe(datos => datos));*/
  }


}
