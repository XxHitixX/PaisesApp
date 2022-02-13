import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Ruta de importacion
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Pais, Translation } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  badges:string[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute, //para ver los parametros de la ruta actual
    private paisService: PaisService //Inyeccion del servicio
  ) { }

  ngOnInit(): void {
    //Otra manera de hacerlo
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisporCodigo(id)),//como el resultado de lapeticion es un objeto de una sola variable se usa una desestructuracion
      tap(console.log)//Sirve para mostrar en pantalla lo que sucede con el observable dentro del pipe
        //esto es lo mismo que (param => console.log(param))
     )
    .subscribe( (pais) => {
        this.pais = pais[0];
        const {translations} = this.pais; //Desestructuracion del objeto pais
        const lenguajes = Object.values(translations); //Tomo los valores de la propiedad translations arrojada por la api la cual es un objeto y la asigno a una nueva varable

        for(let item =0;  item < lenguajes.length; item++){ //recorro todo el arreglo de 1 en 1
          this.badges.push(lenguajes[item].common);//agrego los valores de la propiedad common en la variable badges que voy a mostrar en la vista
        }

 
    })
    


    //Manera de hacerlo
    // this.activatedRoute.params.subscribe( ({ id }) =>{ //Hago una desestructuracion del objeto params.id para usarlo solo con ID
    //   console.log( id )
    //   this.paisService.getPaisporCodigo( id ) 
    //   .subscribe( pais =>{ //Me suscribo al metodo getPaisporCodigo
    //     console.log(pais); //lo muestro en consola
    //   })
    // })
  }

}
