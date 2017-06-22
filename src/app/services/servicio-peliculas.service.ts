import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class ServicioPeliculasService {
  private apikey: string = '971655a756c927d8e2b68925594ecb72';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:max-line-length
  constructor(private jsonP: Jsonp) {
  }

  getPopulares() {
    // tslint:disable-next-line:max-line-length
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res => {
      return res.json().results;
    }
    );
  }
  /**
   *
   * @param pelicula
   */
  buscarPeliculas(pelicula: string) {
    // tslint:disable-next-line:max-line-length
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&query=${pelicula}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res => {
      return res.json();
      /*console.log(res);*/
    });
  }

  buscarPeliculaId(id: string) {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res => {
      /*console.log(res.json());*/
      return res.json();
    });
  }

}
