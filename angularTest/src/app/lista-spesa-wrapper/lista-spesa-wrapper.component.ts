import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  idLista!: number;
  lista!: ElementoLista[];
  listaIniziale: number [] = [];
  urlLista = "http://localhost:3000/elementiLista";
  guardForm = false;
  changesOccured = false;
  guardObserver$ = new Observable<boolean>();
  filtersLoaded!: Promise<boolean>;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => { 
      this.lista = data.lista;      //il nome lista è stato dato nel routing module
      this.lista.forEach(elemento => this.listaIniziale.push(elemento.id));
      });    
  }

  /*initializeList(){
    this.http.get<ElementoLista []>(this.urlLista + "?idLista=" + this.idLista).subscribe(res => {this.lista = res; console.log(res);} );
  }

  addElementToList(element: ElementoLista){
    this.http.post<ElementoLista>(this.urlLista, element).subscribe(res => this.initializeList());
  }

  deleteElementFromList(element: ElementoLista){
    this.http.delete<ElementoLista>(this.urlLista + "/" + element.id).subscribe(res =>{console.log(res)
      this.initializeList();
     });
  }*/

  deleteElement (index: any) : void {
    this.lista.splice(index, 1);
    this.lista = this.lista.concat([]);
    this.changesOccured = true;
    //this.deleteElementFromList(this.lista[index]);
  }

  addElement(element: any){
    this.lista = this.lista.concat([element]);
    this.changesOccured = true;
    //this.addElementToList(element);
  }

  saveChanges(){
    let observableBatch: any []= [];
    this.listaIniziale.forEach(element => observableBatch.push(this.http.delete<ElementoLista>(this.urlLista + "/" + element)));
    this.lista.forEach(elemento => observableBatch.push(this.http.post<ElementoLista>(this.urlLista, elemento)));
    forkJoin(observableBatch).subscribe(res => {
      console.log("il primo forkJoin è avvenuto!");
      this.changesOccured = false;
    });
  }

  saveChangesObs():Observable<any>{
    let observableBatch: any []= [];
    this.listaIniziale.forEach(element => observableBatch.push(this.http.delete<ElementoLista>(this.urlLista + "/" + element)));
    this.lista.forEach(elemento => observableBatch.push(this.http.post<ElementoLista>(this.urlLista, elemento)));
    return forkJoin(observableBatch);
  }

  isChangesConfirmed(isConfirmed: boolean){
    console.log("i cambiamenti sono stati confermati: " + isConfirmed);
    if(isConfirmed) this.saveChangesObs().subscribe(res => this.filtersLoaded = new Promise<boolean>(resolve => resolve(true)));
    else this.guardObserver$ = new Observable<any>(observer => {
      observer.next("Changes not saved");
      observer.complete();
    });
    ;
  }

  async changeGuardForm(): Promise<any> {
    this.guardForm = !this.guardForm;
    await this.filtersLoaded;
    return new Observable<any>(observer => {
      observer.next(this.filtersLoaded);
      observer.complete;
    });
    
  }
}
