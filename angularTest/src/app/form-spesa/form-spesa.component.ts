import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, OnInit } from '@angular/core';
import { ListaSpesaService } from '../services/lista-spesa.service';

@Component({
  selector: 'app-form-spesa',
  templateUrl: './form-spesa.component.html',
  styleUrls: ['./form-spesa.component.css']
})
export class FormSpesaComponent implements OnInit {

  idLista!: number; 
  element!: ElementoLista;

  constructor(private listaSpesaService: ListaSpesaService) {
    this.idLista = 1;
    this.element = new ElementoLista(this.idLista,"",0,0);
  }

  ngOnInit(): void {
  }

  addElement (){
    console.log(this.element)
    console.log("FormSpesaComponent.addElement => request to add new element to list " + this.idLista + ", with id " + this.element.id);
    if(this.element.nome && this.element.prezzo && this.element.quantita) this.listaSpesaService.addElement(this.element);
    this.element = new ElementoLista(this.idLista, "", 0, 0);
  }
}
