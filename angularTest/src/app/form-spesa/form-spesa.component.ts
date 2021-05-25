import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  @Output() listaChange = new EventEmitter<ElementoLista> ();
  element!: ElementoLista;

  constructor() { }

  ngOnInit(): void {
  }

  addElement (element: ElementoLista){
    if(element.nome && element.prezzo && element.quantita) this.listaChange.emit(element);
  }
}
