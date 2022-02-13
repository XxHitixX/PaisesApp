import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  hayError : boolean = false;
  termino  : string = "";
  paises   : Pais[]  = []; 

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  // TODO: Hacer que esto funcione
  buscar( termino: string):void{
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe({
      next: (capital) => {
        this.paises = capital;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })
  }

  // TODO: que esto tambien funciones
  sugerencias( termino: string): void{
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe({ 
      next: (capital) => {
      this.paises = capital;
      }, 
      error: (err) => {
      this.hayError = true;
      this.paises = [];
      }
    })
  }
}
