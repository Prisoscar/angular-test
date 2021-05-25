import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {

  @Input() lista!: ElementoLista[]; 
  @Output() listaChange = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  deleteElement(index: number){
    this.listaChange.emit(index);
  } 
}
