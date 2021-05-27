import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  @Input() idLista!: number; 
  @Output() listaChange = new EventEmitter<ElementoLista> ();
  element!: ElementoLista;

  constructor() {}

  ngOnInit(): void {

  this.element = new ElementoLista(this.idLista,"",0,0);
  }

  addElement (){
    if(this.element.nome && this.element.prezzo && this.element.quantita) this.listaChange.emit(this.element);
    this.element = new ElementoLista(this.idLista, "",0,0);
  }
}
