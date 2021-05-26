import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  lista: ElementoLista[];
  configUrl = "http://localhost:3000/elementiLista";

  constructor(private http: HttpClient) {
    this.lista = [];
  }

  ngOnInit(): void {
    this.initializeList();
  }

  initializeList(){
    this.http.get<ElementoLista []>(this.configUrl).subscribe(res => this.lista = res);
  }

  addElementToList(element: ElementoLista){
    this.http.post<ElementoLista>(this.configUrl, element).subscribe(res => console.log(res));
  }

  deleteElementFromList(element: ElementoLista){
    this.http.delete<ElementoLista>(this.configUrl + "/" + element.id).subscribe(res => console.log(res));
  }

  deleteElement (index: any) : void {
    console.log(index);
    this.deleteElementFromList(this.lista[index]);
    this.initializeList();
    //this.lista.splice(index, 1);
    //this.lista = this.lista.concat([]);
  }

  addElement(element: any){
    //this.lista.push(element);
    this.addElementToList(element);
    this.initializeList();
    //this.lista = this.lista.concat([element]);
  }
}
