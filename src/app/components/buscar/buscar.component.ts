import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  private nombre: string;
  private peliculas: any = '';
  constructor(private activatedRoute: ActivatedRoute, private servicioPeliculasService: ServicioPeliculasService) {
    this.activatedRoute.params.subscribe(datos => this.nombre = datos['nombre']);
  }

  ngOnInit() {
    this.servicioPeliculasService.buscarPeliculas(this.nombre).subscribe(datos => {
      this.peliculas = datos.results;
    });




  }

}
