import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaSpesaService {

  listaObservable = new BehaviorSubject<ElementoLista[]>([]);
  listaElementi: ElementoLista [] = []; 
  idLista!: number;
  changesOccurred = false;
  elementiDaEliminare: number [] = [];
  elementidaAggiungere: ElementoLista [] = [];
  urlLista = "http://localhost:3000/elementiLista";

  constructor(private http: HttpClient) {    
  }

  setList(){
    this.listaElementi.concat([]);
    this.listaObservable.next(this.listaElementi);
  } 

  addElement(element: ElementoLista){
    this.listaElementi = this.listaElementi.concat(element);
    this.listaObservable.next(this.listaElementi);
    this.elementidaAggiungere.push(element);
    this.changesOccurred = true;
  } 

  deleteElement(element: ElementoLista){
    this.listaElementi.splice(this.listaElementi.indexOf(element),1)
    this.listaElementi = this.listaElementi.concat([]);
    this.listaObservable.next(this.listaElementi);
    this.elementiDaEliminare.push(element.id);
    this.changesOccurred = true;
  } 

  saveChanges(){
    let observableBatch: any [] = [];
    this.elementidaAggiungere.forEach(elemento => observableBatch.push(this.http.post<ElementoLista>(this.urlLista, elemento)));
    this.elementiDaEliminare.forEach(elemento => observableBatch.push(this.http.delete<ElementoLista>(this.urlLista + "/" + elemento)));
    
    forkJoin(observableBatch).subscribe(res => {
      console.log("ListaSpesaServiceComponent.saveChanges => saved successfully");
      this.changesOccurred = false;
      this.elementiDaEliminare = [];
      this.elementidaAggiungere = [];  
    })
  }
}
