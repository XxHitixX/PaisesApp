import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  
  @Output() onEnter    : EventEmitter<string> = new EventEmitter();//creo un evento para emitir datos de tipo String al componente padre que es Por-pais
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();//creo un evento para emitir datos de tipo String al componente padre que es Por-pais
  @Input() placeholder : string = '';
 
  termino : string = '';
  debouncer : Subject<string>= new Subject(); //Creo una instancia de Subject que me permite demorar el tiempo que requiera para ejecutar un evento esto es una manera de hacerlo manualmente
  
  buscar(){
    this.onEnter.emit(this.termino);
    
  }

  teclaPresionada(){
    this.debouncer.next(this.termino); //Cada vez que escribo algo en el input, se envia  al debouncer al que esta suscrito es decir al del OnInit
  }
  
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))//Esta tuberia permite esperar 300 milisegundos antes de emitir el subscribe
    .subscribe(valor => { //se inicializa el debouncer al momento en que comienza a ejecutarse la aplicacion y siempre esta escuchando lo que pasa con el debouncer
      console.log(valor);  
      this.onDebounce.emit(valor);
    } )
  }
  
}
