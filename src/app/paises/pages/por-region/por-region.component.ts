import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regionActiva : string = '';
  regiones     : string[] = ['europe', 'asia', 'americas', 'africa', 'oceania'];
  listaPaises  : Pais[] = [];
  hayError     : boolean = false;

  regionSeleccionada( region: string ){
    if(region === this.regionActiva){
      return;
    }
    this.regionActiva = region;
    this.paisService.getRegion(region)
    .subscribe(param => {
      this.listaPaises = param;
      console.log(param)
    })
  }
  
  constructor(private paisService: PaisService) { }

}
