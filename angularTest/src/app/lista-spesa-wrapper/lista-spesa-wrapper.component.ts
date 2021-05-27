import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  idLista!: number;
  lista!: ElementoLista[];
  urlLista = "http://localhost:3000/elementiLista";

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => { 
      this.lista = data.lista;      //il nome lista è stato dato nel routing module
      });
  }

  initializeList(){
    this.http.get<ElementoLista []>(this.urlLista + "?idLista=" + this.idLista).subscribe(res => {this.lista = res; console.log(res);} );
  }

  addElementToList(element: ElementoLista){
    this.http.post<ElementoLista>(this.urlLista, element).subscribe(res => this.initializeList());

  }

  deleteElementFromList(element: ElementoLista){
    this.http.delete<ElementoLista>(this.urlLista + "/" + element.id).subscribe(res =>{console.log(res)
      this.initializeList();
     });
  }

  deleteElement (index: any) : void {
    this.lista.splice(index, 1);
    this.lista = this.lista.concat([]);
    //this.deleteElementFromList(this.lista[index]);
  }

  addElement(element: any){
    this.lista = this.lista.concat([element]);
    //this.addElementToList(element);
  }
}
