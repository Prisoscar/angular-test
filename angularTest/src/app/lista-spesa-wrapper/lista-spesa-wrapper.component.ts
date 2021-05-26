import { Component, OnInit } from '@angular/core';
import { ElementoLista } from './elemento-lista';

@Component({
  selector: 'app-lista-spesa-wrapper',
  templateUrl: './lista-spesa-wrapper.component.html',
  styleUrls: ['./lista-spesa-wrapper.component.css']
})
export class ListaSpesaWrapperComponent implements OnInit {

  lista: ElementoLista[];

  constructor() {
    this.lista = [];
  }

  ngOnInit(): void {
    
  }

  deleteElement (index: any) : void {
    console.log(index);
    this.lista.splice(index, 1);
    this.lista = this.lista.concat([]);
  }

  addElement(element: any){
    //this.lista.push(element);

    this.lista = this.lista.concat([element]);
  }
}
