import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PorPaisComponent
    },

    {
        path: 'region',
        component: PorRegionComponent
    },

    {
        path: 'capital',
        component: PorCapitalComponent
    },

    {
        path: 'pais/:id', //se usa de esta manera :id para pasar algun parametro a la ruta
        component: VerPaisComponent //el componente que se va a abrirc cuando se abre la ruta 
    },

    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule,
    ],
    providers: []
})
export class AppRoutingModule{}