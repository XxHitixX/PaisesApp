import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  termino :string = '';
  hayError:boolean = false;
  paises  :Pais[] = []; 

  constructor(private paisService: PaisService){}
  
  buscar( termino:string ) { // se le pasa el termino que recoje del componente hijo a traves del @output en la caja de texto
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (error) =>{
        this.hayError = true;
        console.log(error);
        this.paises = [];
      }
    })  
  }

  sugerencias( termino: string ){
    this.hayError = false;
    // TODO: Implementar las sugerencias

  }
}
