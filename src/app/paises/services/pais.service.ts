import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';
  

  constructor(private http: HttpClient) { }

  buscarPais(termino: string):Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Pais[]>(url);
  }

  //Busco la capital en la api pero aun no se ha suscrito para escuchar la peticion
  buscarCapital(termino: string):Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url);
  }

  // https://restcountries.com/v3.1/alpha/{code}
  getPaisporCodigo(id: string):Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais>(url);
  }

   //https://restcountries.com/v3.1/region/{region}
   getRegion(region: string):Observable<Pais[]>{
     const url = `${this.apiUrl}/region/${region}`;
     return this.http.get<Pais[]>(url);
   }
}
