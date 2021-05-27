import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from './lista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  idLista!: number;
  lista!: ElementoLista[];
  liste!: Lista[]; 
  urlLista = "http://localhost:3000/elementiLista";
  urlListe = "http://localhost:3000/liste";
  selezione = false;
  errore = false;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("init")
    let idLista = this.route.snapshot.params.idLista;
    if (idLista){
      this.idLista = idLista;
      this.selezione = true; 
    } 
    if(this.selezione)this.initializeList();
    if(!this.selezione)this.getListe();
  }

  getListe(){
    this.http.get<Lista[]>(this.urlListe).subscribe(res => {this.liste = res; console.log(this.liste)});
  }

  initializeList(){
    this.http.get<ElementoLista []>(this.urlLista + "?idLista=" + this.idLista).subscribe(res => this.lista = res);
  }

  addElementToList(element: ElementoLista){
    this.http.post<ElementoLista>(this.urlLista, element).subscribe(res =>{console.log(res)
      this.initializeList();
     });

  }

  deleteElementFromList(element: ElementoLista){
    this.http.delete<ElementoLista>(this.urlLista + "/" + element.id).subscribe(res =>{console.log(res)
      this.initializeList();
     });
  }

  deleteElement (index: any) : void {
    console.log(index);
    this.deleteElementFromList(this.lista[index]);
  }

  addElement(element: any){
    this.addElementToList(element);
  }

  confirmList(){
    if(this.idLista) this.selezione = true;
    if(!this.idLista) this.errore = true;
    console.log("lista scelta: " + this.idLista);
  } 
}
