import { ElementoLista } from './../lista-spesa-wrapper/elemento-lista';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totale-spesa',
  templateUrl: './totale-spesa.component.html',
  styleUrls: ['./totale-spesa.component.css']
})
export class TotaleSpesaComponent implements OnInit {

  @Input() lista!: ElementoLista[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
