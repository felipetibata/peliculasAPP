import { Component, OnInit } from '@angular/core';
import { ServicioPeliculasService } from '../../services/servicio-peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares: any;

  ngOnInit(): void {
    this.getPopulares();
  }


  constructor(private peliculasService: ServicioPeliculasService) {

  }

  getPopulares() {
    this.peliculasService.getPopulares().subscribe(data => {
      this.populares = data;
      /*console.log(data);*/
    }
    );
  }


}
