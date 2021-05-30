import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { concat, forkJoin, from, Observable, ObservableInput, of} from 'rxjs';
import {concatMap} from 'rxjs/operators';

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
  nextStateUrl!: string;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    let idList = this.route.snapshot.paramMap.get("idLista");
    if (idList != null) this.idLista = + idList;
    this.route.data.subscribe(data => { 
      this.lista = data.lista;      //il nome lista è stato dato nel routing module
      this.lista.forEach(elemento => this.listaIniziale.push(elemento.id));
      console.log("ListaSpesaWrapperComponent.ngOnInit.subscribe => list number " + this.idLista + " loaded.");
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

  //this method routes to list selection page
  routeToListSelectionPage(){
    console.log("ListaSpesaWrapperComponent.routeToListSelectionPage => Routing request for /selezionalista")
    this.router.navigate(["/selezionalista"]);
  }

  //this method delete an element from list
  deleteElement (index: any) : void {
    console.log("ListaSpesaWrapperComponent.deleteElement => deleted this element from list:" + this.lista[index] + ".");
    this.lista.splice(index, 1);
    this.lista = this.lista.concat([]);
    this.changesOccured = true;
    //this.deleteElementFromList(this.lista[index]);
  }

  //this method add an element to list
  addElement(element: any){
    console.log("ListaSpesaWrapperComponent.addElement => added this element to list: ");
    console.log(element);
    this.lista = this.lista.concat([element]);
    this.changesOccured = true;
    //this.addElementToList(element);
  }

  //this method saves all changes on db
  saveChanges(){
    if (!this.changesOccured) return;   //in order to avoid useless rest calls
    console.log("ListaSpesaWrapperComponent.saveChanges => Saving changes to db.");
    let observableBatchDelete: any [] = [];
    let observableBatchInsert: any []= [];
    this.listaIniziale.forEach(element => observableBatchDelete.push(this.http.delete<ElementoLista>(this.urlLista + "/" + element)));
    this.lista.forEach(elemento => observableBatchInsert.push(this.http.post<ElementoLista>(this.urlLista, elemento)));

    if (observableBatchDelete.length == 0) {
      console.log("ListaSpesaWrapperComponent.saveChanges => Inserting first element/s in an empty list.");
      forkJoin(observableBatchInsert).subscribe(res => {
        console.log("ListaSpesaWrapperComponent.saveChanges.subscribe => insert forkjoin executed.");
        this.changesOccured = false;
      });
    }else forkJoin(observableBatchDelete).subscribe(res => {
            console.log("ListaSpesaWrapperComponent.saveChanges.subscribe => delete forkjoin executed.");
            forkJoin(observableBatchInsert).subscribe(res => console.log("ListaSpesaWrapperComponent.saveChanges.subscribe => insert forkjoin executed."))
            this.changesOccured = false;
    });
  }

  /*saveChangesObs():Observable<any>{
    let observableBatch: any []= [];
    this.listaIniziale.forEach(element => observableBatch.push(this.http.delete<ElementoLista>(this.urlLista + "/" + element)));
    this.lista.forEach(elemento => observableBatch.push(this.http.post<ElementoLista>(this.urlLista, elemento)));
    return forkJoin(observableBatch);
  }*/

  //this method saves changes if user agreed and route to selected route
  isChangesConfirmed(isConfirmed: boolean){
    console.log("ListaSpesaWrapperComponent.isChangesConfirmed => Has user confirmed changes before quit? " + isConfirmed);
    if(isConfirmed) this.saveChanges();
    console.log("executing route");    
    this.changesOccured = false;
    this.router.navigate([this.nextStateUrl]);
  }

  //this method activates the confirm changes form
  changeGuardForm(nextState: any){
    console.log("ListaSpesaWrapperComponent.changeGuardForm => Arrived routing request for: " + nextState.url);
    this.nextStateUrl = nextState.url;
    this.guardForm = !this.guardForm;    
  }

  //this method deactivates the confirm changes form and leaves user to actual page
  deleteRouting(){
    console.log("ListaSpesaWrapperComponent.deleteRouting => Routing request deleted from user.")
    this.guardForm = !this.guardForm; 
  }
}
