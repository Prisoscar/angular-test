import { ListaSpesaService } from './../services/lista-spesa.service';
import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {

  lista!: ElementoLista[];
  displayedColumns = ["nome", "quantita", "prezzo", "actions"];

  constructor(private listaSpesaService :ListaSpesaService) {
    listaSpesaService.listaObservable.subscribe(res => this.lista = res);
   }

  ngOnInit(): void {
  }

  deleteElement(elemento: ElementoLista){
    console.log("ListaSpesaComponent.deleteElement => Requested deletion of element with id: " + elemento.id);
    this.listaSpesaService.deleteElement(elemento);
  }
}
