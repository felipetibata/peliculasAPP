import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  formulario: FormGroup;
  constructor(private router: Router) {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  buscarPelicula() {
    this.router.navigate(['buscar', this.formulario.controls['nombre'].value]);
  }

}
