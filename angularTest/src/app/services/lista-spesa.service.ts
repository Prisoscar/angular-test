import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaSpesaService {

  listaObservable = new BehaviorSubject<ElementoLista[]>([]);
  listaElementi = [new ElementoLista(1, "Pane", 1, 2), new ElementoLista(1, "Mela", 0.5, 4), new ElementoLista(1, "Scatola di sardine", 1.3, 5)];

  constructor() { 
    this.listaObservable.next(this.listaElementi);
  }

  addElement(element: ElementoLista){
    this.listaElementi = this.listaElementi.concat(element);
    this.listaObservable.next(this.listaElementi);
  } 

  deleteElement(element: ElementoLista){
    this.listaElementi.splice(this.listaElementi.indexOf(element),1)
    this.listaElementi = this.listaElementi.concat([]);
    this.listaObservable.next(this.listaElementi);
  } 
}
